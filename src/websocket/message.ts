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

export type MessageKeydown = AbstractMessage & {
    type: 'keydown';
    key: string;
}

export type MessageText = AbstractMessage & {
    type: 'text';
    text: string;
}

export type MessageInteractive = AbstractMessage & {
    type: 'interactive';
    reason: 'open' | 'close' | 'cancel' | 'report';
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
