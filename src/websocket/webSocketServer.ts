import { Server, WebSocket } from 'ws';
import http from 'http';
import * as utils from '../utils';
import { MessageClick, MessageClose, MessageKeydown, MessageScreenshot, MessageState, MessageText, MessageTwofa } from './message';
import { State } from '../model/state';
import { Driver } from '../driver/driver';
import { I18n } from '../i18n';
import { AuthenticationError } from '../error';
import { AbstractCollector, Config } from '../collectors/abstractCollector';

export class WebSocketServer {

    public static PATH = '/api/v1/ws/';
    static TWOFA_TIMEOUT_MS = 1000 * 60 * 3; // 3 minutes

    private path: string;
    private server: Server;
    private ws: WebSocket | null = null
    private locale: string;
    private collector: AbstractCollector<Config>;

    public onTwofa: ((event: MessageTwofa) => void) | undefined;
    public onClick: ((event: MessageClick) => void) | undefined;
    public onKeydown: ((event: MessageKeydown) => void) | undefined;
    public onText: ((event: MessageText) => void) | undefined;
    public onClose: ((event: MessageClose) => void) | undefined;

    constructor(httpServer: http.Server | undefined, locale: string, collector: AbstractCollector<Config>) {
        this.path = `${WebSocketServer.PATH}${utils.generate_token()}`;
        this.server = new Server({
            server: httpServer,
            path: this.path,
            port: httpServer ? undefined : parseInt(utils.getEnvVar("PORT"))
        });
        this.locale = locale
        this.collector = collector;
    }

    public start(): string {
        this.server.on('connection', (ws) => {
            console.log(`WebSocket connection established on ${this.path}`);
            this.ws = ws;

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
                        this.onKeydown(data as MessageKeydown);
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
        });
        return this.path;
    }

    public close() {
        this.server.close();
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

        const message: MessageState = {
            type: 'state',
            state: state
        };

        // Check if WebSocket is connected
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            // Wait for connection before sending the state
            this.server.on('connection', () => {
                this.sendMessage(message);
            });
        }
        else {
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
