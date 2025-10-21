import { Driver, Element } from "../driver/driver";
import { TwofaPromise } from "../collect/twofaPromise";

export enum ActionEnum  {
    GOAL_REACHED = 'goalReached',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    GET_TEXT_CONTENT = 'getTextContent',
    INPUT_2FA_CODE = 'input2FACode',
    GET_TWOFA_INSTRUCTIONS = 'get2FAInstructions'
}

export abstract class Action<ResultType> {

    static fromObject(obj: any): Action<any> {
        switch (obj.action) {
            case ActionEnum.LEFT_CLICK:
                return new LeftClickAction(obj.description, obj.location, obj.args, obj.x, obj.y, obj.cssSelector);
            case ActionEnum.INPUT_TEXT:
                return new InputTextAction(obj.description, obj.location, obj.args, obj.x, obj.y, obj.cssSelector);
            case ActionEnum.GET_TEXT_CONTENT:
                return new GetTextContentAction(obj.description, obj.location, obj.args, obj.x, obj.y, obj.cssSelector);
            case ActionEnum.INPUT_2FA_CODE:
                return new InputTwofaAction(obj.description, obj.location, obj.args, obj.x, obj.y, obj.cssSelector);
            case ActionEnum.GET_TWOFA_INSTRUCTIONS:
                return new GetTwofaInstructionsAction(obj.description, obj.location, obj.args, obj.x, obj.y, obj.cssSelector);
            default:
                throw new Error(`Action ${obj.action} not implemented`);
        }
    }

    static async performActions(actions: Action<any>[], driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<any> {
        for(const action of actions) {
            const result = await action.perform(driver, params, twofaPromise);
            if (result) {
                return result;
            }
        }
        return;
    }

    action: ActionEnum;
    description: string;
    location: string;
    args: any;
    x?: number;
    y?: number;
    cssSelector?: string;

    constructor(action: ActionEnum, description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        this.action = action;
        this.description = description;
        this.location = location;
        this.args = args;
        this.x = x;
        this.y = y;
        this.cssSelector = cssSelector;
    }

    protected async getElement(driver: Driver): Promise<Element> {
        let element: Element | null;
        // If we have cssSelector, use it
        if (this.cssSelector) {
            // Get element from cssSelector
            element = await driver.getElement({
                selector: this.cssSelector,
                info: this.description
            })
        }
        // If we have coordinates, but no cssSelector
        else if (this.x && this.y && !this.cssSelector) {
            // Get element from coordinates
            element = await driver.getElementCoordinates(this.x!, this.y!);
            if (!element) {
                throw new Error(`No element found at coordinates (${this.x}, ${this.y})`);
            }
            this.cssSelector = await element.cssSelector();
        }
        else {
            throw new Error('No way to locate element (no cssSelector or coordinates)');
        }

        // If no element found, throw error
        if (!element) {
            throw new Error(`Element not found for action ${this.action}`);
        }

        return element;
    }

    abstract perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<ResultType>;

    toString(): string {
        return `Action: ${this.action}, Description: ${this.description}`;
    }
}

export class LeftClickAction extends Action<void> {
    constructor(description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        // args should have 'navigation' field
        if(!args.hasOwnProperty('navigation')) {
            throw new Error('LeftClickAction requires args to have a "navigation" field');
        }

        super(ActionEnum.LEFT_CLICK, description, location, args, x, y, cssSelector);
    }

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<void> {
        let element: Element = await this.getElement(driver);
        await element.click({
            navigation: this.args.navigation
        });
    }

    toString(): string {
        return `Left click on ${this.description}`;
    }
}

export class InputTextAction extends Action<void> {
    constructor(description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        // args should have 'text' field
        if(!args.hasOwnProperty('text')) {
            throw new Error('InputTextAction requires args to have a "text" field');
        }

        super(ActionEnum.INPUT_TEXT, description, location, args, x, y, cssSelector);
    }

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<void> {
        // If parameter exists
        if(!params.hasOwnProperty(this.args.text)) {
            throw new Error(`Parameter ${this.args.text} not found in params`);
        }

        let element: Element = await this.getElement(driver);
        await element.inputText(params[this.args.text]);
    }

    toString(): string {
        return `Input ${this.args.text} into field ${this.description}`;
    }
}

export class GetTextContentAction extends Action<string> {
    constructor(description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        // args should have 'default' field
        if(!args.hasOwnProperty('default')) {
            throw new Error('GetTextContentAction requires args to have a "default" field');
        }

        super(ActionEnum.GET_TEXT_CONTENT, description, location, args, x, y, cssSelector);
    }

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<string> {
        let element: Element = await this.getElement(driver);
        return await element.textContent(this.args.default);
    }

    toString(): string {
        return `Get text content from field ${this.description}`;
    }
}

export class InputTwofaAction extends Action<void> {
    constructor(description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        // args should have 'tries' field
        if(!args.hasOwnProperty('tries')) {
            throw new Error('InputTwofaAction requires args to have a "tries" field');
        }

        super(ActionEnum.INPUT_2FA_CODE, description, location, args, x, y, cssSelector);
    }

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise): Promise<void> {
        // Get 2fa code
        const code = await twofaPromise.code();

        let element: Element = await this.getElement(driver);
        await element.inputText(code, this.args.tries);
    }

    toString(): string {
        return `Input 2fa code into field ${this.description}`;
    }
}

export class GetTwofaInstructionsAction extends Action<string> {
    constructor(description: string, location: string, args: any, x: number, y: number, cssSelector?: string) {
        // args should have 'default' field
        if(!args.hasOwnProperty('default')) {
            throw new Error('InputTwofaAction requires args to have a "default" field');
        }

        super(ActionEnum.GET_TWOFA_INSTRUCTIONS, description, location, args, x, y, cssSelector);
    }

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<string> {
        let element: Element = await this.getElement(driver);
        return await element.textContent(this.args.default);
    }

    toString(): string {
        return `Get 2fa instructions text ${this.description}`;
    }
}