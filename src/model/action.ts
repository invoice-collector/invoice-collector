export enum ActionEnum  {
    GOAL_REACHED = 'goalReached',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    INPUT_2FA_CODE = 'input2FACode',
    GET_TEXT_CONTENT = 'getTextContent'
}

export class Action {
    action: ActionEnum;
    description: string;
    parameter: string;
    x?: number;
    y?: number;
    cssSelector?: string;

    constructor(action: ActionEnum, description: string, parameter: string) {
        this.action = action;
        this.description = description;
        this.parameter = parameter;
    }
}