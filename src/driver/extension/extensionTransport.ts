import http from 'http';
import { randomUUID } from 'crypto';
import { EventEmitter } from 'events';
import { TLSSocket } from 'tls';
import { RawData, WebSocket } from 'ws';
import { AbstractDriver } from '../abstractDriver';
import { WebSocketServerManager } from '../../websocket/webSocketServerManager';
import { ExtensionProtocolError, isPageList, isRecord, Params, PARALLEL_METHODS } from './protocol';
import * as utils from '../../utils';

/** Tracks one server request until its response or timeout is received. */
interface PendingRequest {
    id: string;
    method: string;
    params: Params;
    timeout: number;
    resolve: (value: unknown) => void;
    reject: (error: Error) => void;
    timer?: NodeJS.Timeout;
    result?: unknown;
    responded: boolean;
}

/** Holds bounded chunks for a single large response value. */
interface Transfer {
    total: number;
    chunks: Map<number, string>;
    bytes: number;
    timer: NodeJS.Timeout;
}

const MAX_MESSAGE_BYTES = 1024 * 1024;
const MAX_TRANSFER_BYTES = 64 * 1024 * 1024;
const MAX_TRANSFERS = 128;
const INCOMPLETE_TRANSFER = Symbol('incomplete transfer');

/** Routes one collection's WebSocket protocol traffic to its remote browser extension. */
export class ExtensionTransport extends EventEmitter {
    /** Prefix for random per-collection extension paths. */
    public static PATH = '/api/v1/driver/';

    /** Random path used to locate this transport in the shared WebSocket manager. */
    public readonly path: string;
    private readonly extensionOrigin: string;
    private readonly allowInsecureTransport: boolean;
    private readonly manager: WebSocketServerManager;
    private socket: WebSocket | null = null;
    private hasConnected = false;
    private ready = false;
    private disposed = false;
    private generation = 0;
    private heartbeat?: NodeJS.Timeout;
    private pongTimer?: NodeJS.Timeout;
    private reconnectTimer?: NodeJS.Timeout;
    private pingId?: string;
    private actionId?: string;
    private queue: PendingRequest[] = [];
    private pending = new Map<string, PendingRequest>();
    private transfers = new Map<string, Transfer>();
    private transferBytes = 0;

    /**
     * Registers this transport path and configures the allowed extension origin.
     * @param server The HTTP server to which the WebSocket manager should be attached.
      * @throws Error if EXTENSION_ORIGIN is missing or is not a chrome-extension origin.
     */
    constructor(server: http.Server) {
        super();
        this.path = `${ExtensionTransport.PATH}${utils.generate_token()}`;

        this.extensionOrigin = utils.getEnvVar('EXTENSION_ORIGIN', 'TODO');
        if (!/^chrome-extension:\/\/[^/\s]+$/.test(this.extensionOrigin)) {
            throw new Error('An explicit chrome-extension:// origin is required.');
        }
        this.allowInsecureTransport = process.env.NODE_ENV !== 'production';

        this.manager = WebSocketServerManager.getInstance();
        this.manager.initialize(server);
        this.manager.registerHandler(this.path, this);
    }

    /**
     * Whether an accepted extension socket is ready for protocol requests.
     * @returns True if the extension socket is ready for protocol requests, otherwise false.
     */
    get connected(): boolean {
        return this.ready && this.socket?.readyState === WebSocket.OPEN;
    }

    /**
     * Returns the number of times the extension socket has disconnected.
     * @returns The disconnect generation for this transport.
     */
    get connectionGeneration(): number {
        return this.generation;
    }

    /**
     * Waits for the extension to connect and complete any required resynchronization.
     * @throws ExtensionProtocolError if the transport is disposed or the connection times out.
     */
    async waitForConnection(): Promise<void> {
        if (this.connected) {
            return;
        }
        if (this.disposed) {
            throw new ExtensionProtocolError('DISCONNECTED', 'Extension session is closed.');
        }
        await new Promise<void>((resolve, reject) => {
            const cleanup = () => {
                clearTimeout(timer);
                this.off('connected', onConnected);
                this.off('disposed', onDisposed);
            };
            const onConnected = () => { cleanup(); resolve(); };
            const onDisposed = () => {
                cleanup();
                reject(new ExtensionProtocolError('DISCONNECTED', 'Extension session is closed.'));
            };
            const timer = setTimeout(() => {
                cleanup();
                reject(new ExtensionProtocolError('TIMEOUT', 'Timed out waiting for the extension.'));
            }, 30000);
            this.once('connected', onConnected);
            this.once('disposed', onDisposed);
        });
    }

    /**
     * Validates the socket's Origin and transport security, then attaches protocol handlers.
     * @param socket The upgraded extension WebSocket.
     * @param request The HTTP upgrade request containing Origin and TLS information.
     * @returns True if the connection was accepted, otherwise false.
     */
    accept(socket: WebSocket, request: http.IncomingMessage): boolean {
        if (this.disposed || this.socket || request.headers.origin !== this.extensionOrigin ||
            (!this.allowInsecureTransport && !(request.socket as TLSSocket).encrypted &&
                request.headers['x-forwarded-proto'] !== 'https')) {
            return false;
        }
        const resuming = this.hasConnected;
        clearTimeout(this.reconnectTimer);
        this.socket = socket;
        socket.on('message', (data, binary) => this.receive(data, binary));
        socket.on('close', () => this.disconnected(socket));
        socket.on('error', () => socket.terminate());
        this.heartbeat = setInterval(() => {
            this.pingId = randomUUID();
            this.send({ type: 'ping', id: this.pingId, ts: Date.now() });
            this.pongTimer = setTimeout(() => socket.terminate(), 10000);
        }, 20000);
        this.hasConnected = true;
        if (resuming) {
            void this.resynchronize(socket);
        } else {
            this.ready = true;
            this.emit('connected');
        }
        return true;
    }

    /**
     * Handles a WebSocketServerManager connection targeting this collection's path.
     * @param socket The upgraded WebSocket.
     * @param request The HTTP upgrade request.
     */
    handleConnection(socket: WebSocket, request: http.IncomingMessage): void {
        socket.on('error', () => socket.terminate());
        if (!this.accept(socket, request)) {
            socket.close(4001, 'Connection rejected');
        }
    }

    /**
     * Refreshes the server's page cache after the extension reconnects.
     * @param socket The reconnecting WebSocket that must remain current during resynchronization.
     */
    private async resynchronize(socket: WebSocket): Promise<void> {
        try {
            const pages = await this.enqueue('page.list', {}, AbstractDriver.DEFAULT_TIMEOUT, true);
            if (!isPageList(pages)) {
                throw new ExtensionProtocolError('INTERNAL', 'Invalid page list.');
            }
            if (this.socket === socket) {
                this.emit('pages', pages);
                this.ready = true;
                this.emit('connected');
            }
        } catch {
            socket.terminate();
        }
    }

    /**
     * Sends a protocol request and resolves with its result or rejects with its protocol error.
     * @param method The protocol method name.
     * @param params The request parameters, or an empty object when omitted.
     * @param timeout The fallback request timeout in milliseconds.
     * @returns A promise containing the decoded response result.
     * @throws ExtensionProtocolError when disconnected, given invalid parameters, or timed out.
     */
    request<Result>(method: string, params: Params = {}, timeout = AbstractDriver.DEFAULT_TIMEOUT): Promise<Result> {
        return this.enqueue(method, params, timeout) as Promise<Result>;
    }

    /**
     * Queues concurrent actions while allowing designated read-only requests to run in parallel.
     * @param method The protocol method name.
     * @param params The request parameters.
     * @param timeout The fallback timeout in milliseconds.
     * @param internal True for the reconnect resynchronization request.
     * @returns A promise containing the response result.
     * @throws ExtensionProtocolError when disconnected or given an invalid timeout.
     */
    private enqueue(method: string, params: Params, timeout: number, internal = false): Promise<unknown> {
        if ((!this.connected && !internal) || this.socket?.readyState !== WebSocket.OPEN) {
            return Promise.reject(new ExtensionProtocolError('DISCONNECTED', 'Extension is disconnected.'));
        }
        const effectiveTimeout = params.timeout ?? timeout;
        if (typeof effectiveTimeout !== 'number' || !Number.isFinite(effectiveTimeout) || effectiveTimeout < 0 ||
            effectiveTimeout > 2147473647) {
            return Promise.reject(new ExtensionProtocolError('INVALID_PARAMS', 'Invalid request timeout.'));
        }
        return new Promise((resolve, reject) => {
            const pending: PendingRequest = {
                id: randomUUID(), method, params, timeout: effectiveTimeout,
                resolve, reject, responded: false,
            };
            if (PARALLEL_METHODS.has(method) || !this.actionId) {
                this.dispatch(pending);
            } else {
                this.queue.push(pending);
            }
        });
    }

    /**
     * Serializes and sends a request, then schedules its protocol timeout.
     * @param pending The request entry to dispatch.
     */
    private dispatch(pending: PendingRequest): void {
        const message = JSON.stringify({ type: 'request', id: pending.id, method: pending.method, params: pending.params });
        if (Buffer.byteLength(message) > MAX_MESSAGE_BYTES * 2) {
            pending.reject(new ExtensionProtocolError('INVALID_PARAMS', 'Request exceeds the message size limit.'));
            this.drain();
            return;
        }
        this.pending.set(pending.id, pending);
        if (!PARALLEL_METHODS.has(pending.method)) {
            this.actionId = pending.id;
        }
        pending.timer = setTimeout(() => {
            this.send({ type: 'cancel', id: pending.id });
            const actionTimedOut = this.actionId === pending.id;
            const error = new ExtensionProtocolError('TIMEOUT', `${pending.method} timed out.`, { timeout: pending.timeout });
            if (actionTimedOut) {
                this.ready = false;
                this.socket?.terminate();
            }
            this.finish(pending, error);
        }, pending.timeout + 10000);
        this.socket!.send(message, error => {
            if (error) {
                this.socket?.terminate();
            }
        });
    }

    /**
     * Dispatches the next queued action when no action is currently running.
     */
    private drain(): void {
        if (this.connected && !this.actionId && this.queue.length) {
            this.dispatch(this.queue.shift()!);
        }
    }

    /**
     * Clears request bookkeeping and settles the caller's promise.
     * @param pending The request entry to finish.
     * @param error The error to reject with, if the request failed.
     * @param value The successful result value.
     */
    private finish(pending: PendingRequest, error?: Error, value?: unknown): void {
        clearTimeout(pending.timer);
        this.pending.delete(pending.id);
        if (this.actionId === pending.id) {
            this.actionId = undefined;
        }
        if (error) {
            pending.reject(error);
        } else {
            pending.resolve(value);
        }
        this.drain();
    }

    /**
     * Parses and routes one client message without logging potentially sensitive payloads.
     * @param raw The WebSocket message payload.
     * @param binary Whether the payload was sent as a binary frame.
     */
    private receive(raw: RawData, binary: boolean): void {
        try {
            if (binary || Buffer.byteLength(raw.toString()) > MAX_MESSAGE_BYTES * 2) {
                throw new Error('Invalid message size or encoding.');
            }
            const message: unknown = JSON.parse(raw.toString());
            if (!isRecord(message)) {
                throw new Error('Invalid message.');
            }
            switch (message.type) {
                case 'ping':
                    if (typeof message.id !== 'string') { throw new Error('Invalid ping.'); }
                    this.send({ type: 'pong', id: message.id, ts: Date.now() });
                    break;
                case 'pong':
                    if (message.id === this.pingId) {
                        clearTimeout(this.pongTimer);
                        this.pingId = undefined;
                    }
                    break;
                case 'bye':
                    this.dispose();
                    break;
                case 'response':
                    this.respond(message);
                    break;
                case 'event':
                    if (typeof message.event !== 'string' || !isRecord(message.data) || typeof message.ts !== 'number') {
                        throw new Error('Invalid event.');
                    }
                    if (message.event === 'transfer.chunk') {
                        this.chunk(message.data);
                    } else if (message.event !== 'client.log') {
                        this.emit('event', message.event, message.data);
                    }
                    break;
                default:
                    throw new Error('Unexpected message type.');
            }
        } catch {
            this.send({ type: 'bye', code: 'INVALID_PARAMS', reason: 'Invalid extension message.' });
            this.socket?.close(4003, 'Invalid extension message');
        }
    }

    /**
     * Matches a client response to its pending request and resolves any transferred values.
     * @param message The parsed response envelope.
     * @throws Error if the response envelope is malformed.
     */
    private respond(message: Params): void {
        if (typeof message.id !== 'string' || typeof message.ok !== 'boolean') {
            throw new Error('Invalid response.');
        }
        const pending = this.pending.get(message.id);
        if (!pending || pending.responded) {
            return;
        }
        if (!message.ok) {
            if (!isRecord(message.error) || typeof message.error.code !== 'string' || typeof message.error.message !== 'string') {
                throw new Error('Invalid error response.');
            }
            this.finish(pending, new ExtensionProtocolError(message.error.code, message.error.message,
                isRecord(message.error.data) ? message.error.data : undefined));
            return;
        }
        if (!isRecord(message.result)) {
            throw new Error('Invalid result.');
        }
        pending.responded = true;
        pending.result = message.result;
        clearTimeout(pending.timer);
        pending.timer = setTimeout(() => {
            this.finish(pending, new ExtensionProtocolError('INTERNAL', 'Incomplete extension transfer.'));
        }, 30000);
        this.resolveResult(pending);
    }

    /**
     * Replaces complete transfer markers in a response and settles the pending request.
     * @param pending The request whose response may contain transfer markers.
     */
    private resolveResult(pending: PendingRequest): void {
        const consumed = new Set<string>();
        try {
            const result = this.hydrate(pending.result, consumed, 0);
            for (const transferId of consumed) {
                this.removeTransfer(transferId);
            }
            this.finish(pending, undefined, result);
        } catch (error) {
            if (error !== INCOMPLETE_TRANSFER) {
                this.finish(pending, new ExtensionProtocolError('INTERNAL', 'Invalid extension transfer.'));
            }
        }
    }

    /**
     * Recursively replaces transfer markers with ordered chunk data.
     * @param value The response value to hydrate.
     * @param consumed Transfer IDs successfully consumed during hydration.
     * @param depth Current nesting depth, used to bound recursive results.
     * @returns The value with complete transfers replaced by joined chunk data.
     * @throws Error for malformed markers or excessive nesting; throws an internal sentinel for incomplete transfers.
     */
    private hydrate(value: unknown, consumed: Set<string>, depth: number): unknown {
        if (depth > 64) { throw new Error('Result nesting limit exceeded.'); }
        if (Array.isArray(value)) {
            return value.map(item => this.hydrate(item, consumed, depth + 1));
        }
        if (!isRecord(value)) { return value; }
        if ('$transfer' in value) {
            if (typeof value.$transfer !== 'string' || Object.keys(value).length !== 1) {
                throw new Error('Invalid transfer reference.');
            }
            const transfer = this.transfers.get(value.$transfer);
            if (!transfer || transfer.chunks.size !== transfer.total) { throw INCOMPLETE_TRANSFER; }
            consumed.add(value.$transfer);
            return Array.from({ length: transfer.total }, (_, index) => transfer.chunks.get(index)!).join('');
        }
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, this.hydrate(item, consumed, depth + 1)]));
    }

    /**
     * Validates, stores, and accounts for one chunk from a large client response.
     * @param data The transfer chunk event payload.
     * @throws Error if the chunk conflicts with existing data or exceeds transfer limits.
     */
    private chunk(data: Params): void {
        const { transferId, index, total, data: content } = data;
        if (typeof transferId !== 'string' || typeof content !== 'string' || typeof index !== 'number' ||
            typeof total !== 'number' || !Number.isInteger(index) || !Number.isInteger(total) ||
            index < 0 || total < 1 || total > 65536 || index >= total) {
            throw new Error('Invalid chunk.');
        }
        let transfer = this.transfers.get(transferId);
        if (!transfer) {
            if (this.transfers.size >= MAX_TRANSFERS) { throw new Error('Too many transfers.'); }
            transfer = {
                total, chunks: new Map(), bytes: 0,
                timer: setTimeout(() => this.removeTransfer(transferId), 30000),
            };
            this.transfers.set(transferId, transfer);
        }
        if (transfer.total !== total || transfer.chunks.has(index)) { throw new Error('Conflicting chunk.'); }
        const bytes = Buffer.byteLength(content);
        if (this.transferBytes + bytes > MAX_TRANSFER_BYTES) { throw new Error('Transfer size limit exceeded.'); }
        transfer.chunks.set(index, content);
        transfer.bytes += bytes;
        this.transferBytes += bytes;
        for (const pending of this.pending.values()) {
            if (pending.responded) { this.resolveResult(pending); }
        }
    }

    /**
     * Releases chunks and timers associated with a completed or expired transfer.
     * @param transferId The transfer identifier to remove.
     */
    private removeTransfer(transferId: string): void {
        const transfer = this.transfers.get(transferId);
        if (transfer) {
            clearTimeout(transfer.timer);
            this.transferBytes -= transfer.bytes;
            this.transfers.delete(transferId);
        }
    }

    /**
     * Sends a JSON control message when the WebSocket is open.
     * @param message The control message to serialize and send.
     */
    private send(message: Params): void {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        }
    }

    /**
     * Rejects in-flight work and starts the reconnect grace period for this session.
     * @param socket The socket whose close event was received.
     */
    private disconnected(socket: WebSocket): void {
        if (this.socket !== socket) { return; }
        this.socket = null;
        this.ready = false;
        this.generation++;
        clearInterval(this.heartbeat);
        clearTimeout(this.pongTimer);
        const error = new ExtensionProtocolError('DISCONNECTED', 'Extension disconnected; requests were not replayed.');
        for (const pending of this.pending.values()) { this.finish(pending, error); }
        for (const pending of this.queue.splice(0)) { pending.reject(error); }
        for (const transferId of this.transfers.keys()) { this.removeTransfer(transferId); }
        this.emit('disconnected');
        if (!this.disposed) {
            this.reconnectTimer = setTimeout(() => this.dispose(), 30000);
        }
    }

    /**
     * Closes the session, rejects remaining work, and unregisters its path from WebSocketServerManager.
     */
    dispose(): void {
        if (this.disposed) { return; }
        this.disposed = true;
        clearTimeout(this.reconnectTimer);
        if (this.socket) {
            const socket = this.socket;
            this.send({ type: 'bye', code: 'SESSION_CLOSED' });
            this.disconnected(socket);
            socket.close(1000, 'Session closed');
        }
        this.manager.unregisterHandler(this.path);
        this.emit('disposed');
    }
}
