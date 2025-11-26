import { Server, WebSocket } from 'ws';
import http from 'http';
import * as utils from '../utils';
import { MessageClick, MessageClose, MessageKeydown, MessageScreenshot, MessageState, MessageText, MessageTwofa } from './message';
import { State } from '../model/state';
import { Driver } from '../driver/driver';
import { I18n } from '../i18n';
import { AuthenticationError } from '../error';
import { AbstractCollector, Config } from '../collectors/abstractCollector';

// Singleton WebSocket server manager
class WebSocketServerManager {
    private static instance: WebSocketServerManager | null = null;
    private wss: Server | null = null;
    private handlers: Map<string, WebSocketServer> = new Map();

    private constructor() {}

    public static getInstance(): WebSocketServerManager {
        if (!WebSocketServerManager.instance) {
            WebSocketServerManager.instance = new WebSocketServerManager();
        }
        return WebSocketServerManager.instance;
    }

    public initialize(httpServer: http.Server) {
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

    public registerHandler(path: string, handler: WebSocketServer) {
        this.handlers.set(path, handler);
    }

    public unregisterHandler(path: string) {
        this.handlers.delete(path);
    }
}

export class WebSocketServer {

    public static PATH = '/api/v1/ws/';
    static TWOFA_TIMEOUT_MS = 1000 * 60 * 3; // 3 minutes

    private path: string;
    private ws: WebSocket | null = null;
    private locale: string;
    private collector: AbstractCollector<Config>;
    private defaultState : State | null = null;

    public onTwofa: ((event: MessageTwofa) => void) | undefined;
    public onClick: ((event: MessageClick) => void) | undefined;
    public onKeydown: ((event: MessageKeydown) => void) | undefined;
    public onText: ((event: MessageText) => void) | undefined;
    public onClose: ((event: MessageClose) => void) | undefined;

    constructor(httpServer: http.Server | undefined, locale: string, collector: AbstractCollector<Config>) {
        this.path = `${WebSocketServer.PATH}${utils.generate_token()}`;
        this.locale = locale
        this.collector = collector;

        // Initialize the singleton WebSocket server manager
        if (httpServer) {
            WebSocketServerManager.getInstance().initialize(httpServer);
        }
    }

    public start(): string {
        // Register this handler with the manager
        WebSocketServerManager.getInstance().registerHandler(this.path, this);
        return this.path;
    }

    public handleConnection(ws: WebSocket) {
        console.log(`WebSocket connection established on ${this.path}`);
        this.ws = ws;

        // Send initial state if exists
        if (this.defaultState) {
            this.sendState(this.defaultState);
        }

        // Define message handlers
        ws.on('message', (message) => {
            try {
                const data = JSON.parse(message.toString());

                if (data.type === 'twofa' && data.twofa && this.onTwofa) {
                    this.sendState(State._4_2FA_PROCEEDING);
                    this.onTwofa(data as MessageTwofa);
                }
                else if (data.type === 'click' && data.x !== undefined && data.y !== undefined && this.onClick) {
                    data.x = Driver.VIEWPORT_WIDTH * data.x;
                    data.y = Driver.VIEWPORT_HEIGHT * data.y;
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
                else if (data.type === 'close' && data.reason && this.onClose) {
                    this.onClose(data as MessageClose);
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
            console.log(`WebSocket connection closed on ${this.path}`);
        });
    }

    public close() {
        // Unregister this handler from the manager
        WebSocketServerManager.getInstance().unregisterHandler(this.path);
        this.ws?.close();
        this.ws = null;
    }

    private sendMessage(message: object) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        }
    }

    public sendScreenshot(screenshot: string, width: number, height: number) {
        const message: MessageScreenshot = {
            type: 'screenshot',
            screenshot: screenshot,
            width: width,
            height: height
        };
        this.sendMessage(message);
    }

    public sendState(state: State, stateMessage?: string) {
        state.message = stateMessage ? utils.trim(stateMessage) : state.message;

        // Translate the state title and message
        state.title = I18n.get(state.title, this.locale);
        state.message = I18n.get(state.message, this.locale);

        // Check if WebSocket is connected
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            // Define default state to be send on connection
            this.defaultState = state;
        }
        else {
            const message: MessageState = {
                type: 'state',
                state: state
            };
            this.sendMessage(message);
        }
    }

    public getTwofa(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new AuthenticationError('i18n.collectors.all.2fa.timeout', this.collector)), WebSocketServer.TWOFA_TIMEOUT_MS)
            this.onTwofa = (event: MessageTwofa) => {
                resolve(event.twofa);
            }
        });
    }
}
