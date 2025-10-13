import { State } from "../model/state";

type AbstractMessage = {
    type: string;
}

// RECEIVED MESSAGES

export type MessageTwofa = AbstractMessage & {
    type: 'twofa';
    twofa: string;
}

export type MessageClick = AbstractMessage & {
    type: 'click';
    x: number;
    y: number;
}

export type MessageKeypress = AbstractMessage & {
    type: 'keypress';
    key: string;
}

export type MessageText = AbstractMessage & {
    type: 'text';
    text: string;
}

export type MessageClose = AbstractMessage & {
    type: 'close';
    reason: 'ok' | 'cancel' | 'report';
}

// SENT MESSAGES

export type MessageState = AbstractMessage & {
    type: 'state';
    state: State;
}

export type MessageScreenshot = AbstractMessage & {
    type: 'screenshot';
    screenshot: string;
    width: number;
    height: number;
}
