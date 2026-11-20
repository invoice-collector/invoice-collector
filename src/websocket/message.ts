import { State } from '../model/state';

/**
 * Defines the structure of messages exchanged over the WebSocket connection.
 */
export type AbstractMessage = {
    type: string;
}

// MESSAGES FROM CLIENT TO SERVER

/**
 * Represents a message containing a 2FA code sent by the client.
 */
export type MessageTwofaResponse = AbstractMessage & {
    type: 'twofa';
    twofa: string;
}

/**
 * Represents a message containing a click event sent by the client.
 */
export type MessageClickResponse = AbstractMessage & {
    type: 'click';
    x: number;
    y: number;
}

/**
 * Represents a message containing a keydown event sent by the client.
 */
export type MessageKeydownResponse = AbstractMessage & {
    type: 'keydown';
    key: string;
}

/**
 * Represents a message containing text input sent by the client.
 */
export type MessageTextResponse = AbstractMessage & {
    type: 'text';
    text: string;
}

/**
 * Represents a message containing an interactive event sent by the user.
 */
export type MessageInteractiveRequest = AbstractMessage & {
    type: 'interactive';
    reason: 'open';
    instructions: string;
}

/**
 * Represents a message containing an interactive event sent by the user.
 */
export type MessageInteractiveResponse = AbstractMessage & {
    type: 'interactive';
    reason: 'close' | 'cancel' | 'remove' | 'report';
}

/**
 * Represents a message containing a resize event sent by the client.
 */
export type MessageResizeResponse = AbstractMessage & {
    type: 'resize';
    width: number;
    height: number;
    deviceScaleFactor?: number;
}

// MESSAGES FROM SERVER TO CLIENT

/**
 * Represents a message requesting the client to perform 2FA.
 */
export type MessageTwofaRequest = AbstractMessage & {
    type: 'twofa';
    instructions: string;
    push: boolean;
    authLink: boolean;
}

/**
 * Represents a message containing the current collection state sent by the server.
 */
export type MessageStateRequest = AbstractMessage & {
    type: 'state';
    state: State;
}

/**
 * Represents a message containing a screenshot sent by the server.
 */
export type MessageScreenshotRequest = AbstractMessage & {
    type: 'screenshot';
    screenshot: string;
    width: number;
    height: number;
}

/**
 * Represents a message containing an OAuth2 URL sent by the server.
 */
export type MessageOauth2Request = AbstractMessage & {
    type: 'oauth2';
    url: string;
    iframe: boolean;
}
