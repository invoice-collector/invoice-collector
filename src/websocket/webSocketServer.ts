import { Server, WebSocket } from 'ws';
import http from 'http';
import * as utils from '../utils';
import { AbstractMessage, MessageClick, MessageInteractive, MessageKeydown, MessageOauth2, MessageScreenshot, MessageState, MessageText, MessageTwofa } from './message';
import { State } from '../model/state';
import { AbstractDriver } from '../driver/abstractDriver';
import { I18n } from '../i18n';
import { DisconnectedError } from '../error';
import { AbstractCollector, Config } from '../collectors/abstractCollector';
import { TwofaPromise } from '../tasks/collect/twofaPromise';
import { EventEmitter } from 'events';

// Singleton WebSocket server manager
export class WebSocketServerManager {
    private static instance: WebSocketServerManager | null = null;
    private wss: Server | null = null;
    private handlers: Map<string, WebSocketServer> = new Map();

    /**
     * Gets the singleton instance of the WebSocketServerManager.
     * @returns The singleton instance of the WebSocketServerManager.
     */
    public static getInstance(): WebSocketServerManager {
        if (!WebSocketServerManager.instance) {
            WebSocketServerManager.instance = new WebSocketServerManager();
        }
        return WebSocketServerManager.instance;
    }

    /**
     * Private constructor to enforce the singleton pattern.
     */
    private constructor() {}

    /**
     * Initializes the WebSocket server manager with the given HTTP server.
     * @param httpServer The HTTP server to attach the WebSocket server to.
     */
    public initialize(httpServer: http.Server): void {
        if (this.wss) {
            return; // Already initialized
        }

        this.wss = new Server({ noServer: true });

        // Handle upgrade event manually
        httpServer.on('upgrade', (request, socket, head) => {
            const pathname = request.url;
            if (pathname && this.handlers.has(pathname)) {
                this.wss!.handleUpgrade(request, socket, head, (ws) => {
                    const handler = this.handlers.get(pathname);
                    if (handler) {
                        handler.handleConnection(ws);
                    }
                });
            } else {
                socket.destroy();
            }
        });
    }

    /**
     * Registers a WebSocket server handler for the specified path.
     * @param path The path to register the handler for.
     * @param handler The WebSocket server handler to register.
     */
    public registerHandler(path: string, handler: WebSocketServer): void {
        this.handlers.set(path, handler);
    }

    /**
     * Unregisters a WebSocket server handler for the specified path.
     * @param path The path to unregister the handler for.
     */
    public unregisterHandler(path: string): void {
        this.handlers.delete(path);
    }

    /**
     * Closes the WebSocket server manager and clears all registered handlers.
     */
    public close(): void {
        // Clear all handlers
        this.handlers.clear();
        this.wss?.close();
        this.wss = null;
        WebSocketServerManager.instance = null;
    }
}

export class WebSocketServer extends EventEmitter {

    public static PATH = '/api/v1/ws/';
    public static TWOFA_TIMEOUT_MS = 1000 * 60 * 5; // 5 minutes
    public static OAUTH2_TIMEOUT_MS = 1000 * 60 * 5; // 5 minutes
    public static KEEP_ALIVE_INTERVAL = 1000 * 30;  // 30 seconds

    public path: string;
    private ws: WebSocket | null = null;
    private locale: string;
    private collector: AbstractCollector<Config>;
    private messageQueue: Map<string, AbstractMessage> = new Map();
    oauth2State: string;
    twofa_promise: TwofaPromise;

    public onTwofa: ((event: MessageTwofa) => void) | undefined;
    public onClick: ((event: MessageClick) => void) | undefined;
    public onKeydown: ((event: MessageKeydown) => void) | undefined;
    public onText: ((event: MessageText) => void) | undefined;
    public onInteractive: ((event: MessageInteractive) => void) | undefined;

    /**
     * Constructs a new WebSocket server instance.
     * @param httpServer The HTTP server to attach the WebSocket server to.
     * @param locale The locale of the client in order to translate messages appropriately.
     * @param collector The collector instance associated with the WebSocket server.
     * @param oauth2State The OAuth2 state for the WebSocket server.
     */
    constructor(httpServer: http.Server, locale: string, collector: AbstractCollector<Config>, oauth2State: string) {
        super();
        this.path = `${WebSocketServer.PATH}${utils.generate_token()}`;
        this.locale = locale;
        this.collector = collector;
        this.oauth2State = oauth2State;

        // Initialize the singleton WebSocket server manager
        WebSocketServerManager.getInstance().initialize(httpServer);
        // Set 2FA promise
        this.twofa_promise = new TwofaPromise();
    }

    /**
     * Starts the WebSocket server and registers its handler with the manager.
     * @returns The path of the WebSocket server the client should connect to.
     */
    public start(): string {
        // Register this handler with the manager
        WebSocketServerManager.getInstance().registerHandler(this.path, this);
        return this.path;
    }

    /**
     * Handles a new WebSocket connection.
     * @param ws The WebSocket connection instance.
     */
    public handleConnection(ws: WebSocket) {
        console.log(`WebSocket connection established on ${this.path}`);
        this.ws = ws;

        // Flush any messages queued on connection
        for (const message of this.messageQueue.values()) {
            this.sendMessage(message, false);
        }
        this.messageQueue.clear();

        const keepAliveInterval = setInterval(() => {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                this.ws.ping();
            }
        }, WebSocketServer.KEEP_ALIVE_INTERVAL);

        // Define message handlers
        ws.on('message', (message) => {
            try {
                const data = JSON.parse(message.toString());

                if (data.type === 'twofa' && data.twofa !== undefined && this.onTwofa) {
                    this.sendState(State._4_2FA_PROCEEDING);
                    this.onTwofa(data as MessageTwofa);
                }
                else if (data.type === 'click' && data.x !== undefined && data.y !== undefined && this.onClick) {
                    data.x = AbstractDriver.VIEWPORT_WIDTH * data.x;
                    data.y = AbstractDriver.VIEWPORT_HEIGHT * data.y;
                    this.onClick(data as MessageClick);
                }
                else if (data.type === 'keydown' && data.key && this.onKeydown) {
                    if(
                        data.key.length === 1 ||
                        data.key === 'Backspace' ||
                        data.key === 'Enter' ||
                        data.key === 'Delete' ||
                        data.key === 'ArrowLeft' ||
                        data.key === 'ArrowRight' ||
                        data.key === 'ArrowUp' ||
                        data.key === 'ArrowDown'
                    ){
                        this.onKeydown(data as MessageKeydown);
                    }
                    else if (data.key.length === 2 && (
                            data.key.startsWith('`') ||
                            data.key.startsWith('^') ||
                            data.key.startsWith('~'))
                    ) {
                        this.onKeydown({...data, key: data.key[0]} as MessageKeydown);
                        this.onKeydown({...data, key: data.key[1]} as MessageKeydown);
                    }
                }
                else if (data.type === 'type' && data.text && this.onText) {
                    this.onText(data as MessageText);
                }
                else if (data.type === 'interactive' && data.reason && this.onInteractive) {
                    this.onInteractive(data as MessageInteractive);
                }
                else {
                    console.warn('Unknown message type or missing fields:', data);
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        });

        // Define close handler
        ws.on('close', () => {
            clearInterval(keepAliveInterval);
            console.log(`WebSocket connection closed on ${this.path}`);
        });
    }

    /**
     * Closes the WebSocket connection managed by this server instance.
     */
    public close() {
        // Close the WebSocket connection if open
        this.ws?.close();
        this.ws = null;
    }

    /**
     * Sends a message through the WebSocket connection, optionally persisting it if the connection is not open.
     * @param message The message to send through the WebSocket connection.
     * @param persist Whether to persist the message if the WebSocket connection is not open. The message will be stored in the message queue and sent once the connection is re-established.
     */
    private sendMessage(message: AbstractMessage, persist: boolean) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        } else if (persist) {
            this.messageQueue.set(message.type, message);
        }
    }

    /**
     * Sends a screenshot message through the WebSocket connection.
     * @param screenshot The screenshot image data as a base64-encoded string.
     * @param width The width of the screenshot image.
     * @param height The height of the screenshot image.
     */
    public sendScreenshot(screenshot: string, width: number, height: number) {
        const message: MessageScreenshot = {
            type: 'screenshot',
            screenshot,
            width,
            height,
        };
        this.sendMessage(message, false);
    }

    /**
     * Sends the state of the collection through the WebSocket connection.
     * @param state The state object containing the state information.
     * @param stateMessage An optional message associated with the state to be displayed to the user.
     */
    public sendState(state: State, stateMessage?: string) {
        state.message = stateMessage ? utils.trim(stateMessage) : state.message;

        // Translate the state title and message
        state.title = I18n.get(state.title, this.locale);
        state.message = I18n.get(state.message, this.locale);

        const message: MessageState = {
            type: 'state',
            state,
        };
        this.sendMessage(message, true);
    }

    /**
     * Sends an interactive open message through the WebSocket connection.
     * @param instructions The instructions to be displayed to the user.
     */
    public sendInteractiveOpen(instructions: string) {
        const message: MessageInteractive = {
            type: 'interactive',
            reason: 'open',
            instructions: I18n.get(instructions, this.locale),
        };
        this.sendMessage(message, true);
    }

    /**
     * Sends an OAuth2 message through the WebSocket connection and waits for the OAuth2 code provided by the user.
     * @param url The URL to be used for the OAuth2 authentication.
     * @param iframe A boolean indicating whether the OAuth2 flow should be displayed in an iframe.
     * @returns The OAuth2 code provided by the user.
     */
    public async sendOauth2(url: string, iframe: boolean): Promise<string> {
        const message: MessageOauth2 = {
            type: 'oauth2',
            url,
            iframe,
        };
        this.sendMessage(message, true);

        // Wait for oauth2 code
        return await new Promise((resolve, reject) => {
            setTimeout(() => reject(new DisconnectedError('i18n.collectors.all.oauth2.timeout', this.collector)), WebSocketServer.OAUTH2_TIMEOUT_MS);
            this.once('oauth2_code', (event: { code: string }) => {
                resolve(event.code);
            });
        });
    }

    /**
     * Sends a request for the two-factor authentication (2FA) code through the WebSocket connection and waits for the user to provide it.
     * @param instructions Optional instructions to be displayed to the user regarding the 2FA process.
     * @returns The 2FA code provided by the user.
     */
    public getTwofa(instructions?: string): Promise<string> {
        // If instructions are provided, send new state with instructions to user
        if (instructions) {
            this.sendState(State._3_2FA_WAITING, instructions);
        }
        // Return a promise that resolves when 2FA code is received or rejects on timeout
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new DisconnectedError('i18n.collectors.all.2fa.timeout', this.collector)), WebSocketServer.TWOFA_TIMEOUT_MS);
            this.onTwofa = (event: MessageTwofa) => {
                resolve(event.twofa);
            };
        });
    }
}
