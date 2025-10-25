import * as utils from "../utils"; 

export class State {

    static SUCCESS_LEVEL: number = 7;

    static _2_DISCONNECTED: State = new State(-2, "i18n.class.state.2_disconnected", "i18n.class.state.2_disconnected.message");
    static _1_ERROR: State = new State(-1, "i18n.class.state.1_error", "");
    static _0_UNKNOWN: State = new State(0, "i18n.class.state.0_unknown", "");
    static _1_PREPARING: State = new State(1, "i18n.class.state.1_preparing", "");
    static _2_LOGGING_IN : State = new State(2, "i18n.class.state.2_logging_in", "");
    static _3_2FA_WAITING : State = new State(3, "i18n.class.state.3_2fa_waiting", "");
    static _4_2FA_PROCEEDING : State = new State(4, "i18n.class.state.4_2fa_proceeding", "");
    static _5_COLLECTING : State = new State(5, "i18n.class.state.5_collecting", "");
    static _6_DOWNLOADING : State = new State(6, "i18n.class.state.6_downloading", "");
    static _7_DONE : State = new State(7, "i18n.class.state.7_done", "");

    static DEFAULT_STATE: State = State._0_UNKNOWN;

    static fromObject(obj: object): State {
        let state = new State(obj["index"], obj["title"], obj["message"]);
        state.max = obj["max"];
        return state;
    }

    index: number;
    max: number;
    title: string;
    message: string;

    constructor(index: number, title: string, message: string) {
        this.index = index;
        this.max = State.SUCCESS_LEVEL;
        this.title = title;
        this.message = message;
    }

    // Use update method to update the state values without creating a new instance
    update(state: State, message?: string) {
        // Set state if in error or if current state is not the new state
        if (state.index < 0 || this.index != state.index) {
            this.index = state.index;
            this.max = state.max;
            this.title = state.title;
            this.message = message ? utils.trim(message) : state.message;
        }
    }

    isError(): boolean {
        return this.index < 0;
    }
}