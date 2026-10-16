import { Server, WebSocket } from 'ws';
import http from 'http';

export interface WebSocketConnectionHandler {
    handleConnection(ws: WebSocket, request: http.IncomingMessage): void;
}


// Singleton WebSocket server manager
export class WebSocketServerManager {
    private static instance: WebSocketServerManager | null = null;
    private wss: Server | null = null;
    private handlers: Map<string, WebSocketConnectionHandler> = new Map();

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
                        handler.handleConnection(ws, request);
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
    public registerHandler(path: string, handler: WebSocketConnectionHandler): void {
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
