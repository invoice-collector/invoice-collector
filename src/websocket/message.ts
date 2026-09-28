import { State } from '../model/state';

/**
 * Defines the structure of messages exchanged over the WebSocket connection.
 */
export type AbstractMessage = {
    type: string;
}

// RECEIVED MESSAGES

/**
 * Represents a message containing a 2FA code sent by the client.
 */
export type MessageTwofa = AbstractMessage & {
    type: 'twofa';
    twofa: string;
}

/**
 * Represents a message containing a click event sent by the client.
 */
export type MessageClick = AbstractMessage & {
    type: 'click';
    x: number;
    y: number;
}

/**
 * Represents a message containing a keydown event sent by the client.
 */
export type MessageKeydown = AbstractMessage & {
    type: 'keydown';
    key: string;
}

/**
 * Represents a message containing text input sent by the client.
 */
export type MessageText = AbstractMessage & {
    type: 'text';
    text: string;
}

/**
 * Represents a message containing an interactive event sent by the user.
 */
export type MessageInteractive = AbstractMessage & {
    type: 'interactive';
    reason: 'open' | 'close' | 'cancel' | 'remove' | 'report';
    instructions: string;
}

// SENT MESSAGES

/**
 * Represents a message containing the current collection state sent by the server.
 */
export type MessageState = AbstractMessage & {
    type: 'state';
    state: State;
}

/**
 * Represents a message containing a screenshot sent by the server.
 */
export type MessageScreenshot = AbstractMessage & {
    type: 'screenshot';
    screenshot: string;
    width: number;
    height: number;
}

/**
 * Represents a message containing an OAuth2 URL sent by the server.
 */
export type MessageOauth2 = AbstractMessage & {
    type: 'oauth2';
    url: string;
    iframe: boolean;
}
