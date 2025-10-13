import { Server, WebSocket } from 'ws';
import http from 'http';
import * as utils from '../utils'; // Adjust path as needed
import { MessageClick, MessageClose, MessageKeypress, MessageScreenshot, MessageState, MessageText, MessageTwofa } from './message';
import { State } from '../model/state';
import { Driver } from '../driver/driver';
import { I18n } from '../i18n';

export class WebSocketServer {

    public static PATH = '/api/v1/ws/';

    private path: string;
    private server: Server;
    private ws: WebSocket | null = null
    private locale: string;

    public onTwofa: ((event: MessageTwofa) => void) | undefined;
    public onClick: ((event: MessageClick) => void) | undefined;
    public onKeypress: ((event: MessageKeypress) => void) | undefined;
    public onText: ((event: MessageText) => void) | undefined;
    public onClose: ((event: MessageClose) => void) | undefined;

    constructor(httpServer: http.Server, locale: string) {
        this.path = `${WebSocketServer.PATH}${utils.generate_token()}`;
        this.server = new Server({
            server: httpServer,
            path: this.path,
        });
        this.locale = locale
    }

    public start(): string {
        this.server.on('connection', (ws) => {
            console.log(`WebSocket connection established on ${this.path}`);
            this.ws = ws;

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
                    else if (data.type === 'keydown' && data.key && this.onKeypress) {
                        this.onKeypress(data as MessageKeypress);
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
        this.sendMessage(message);
    }
}
