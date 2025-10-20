import { Driver, Element } from "../driver/driver";
import { TwofaPromise } from "../collect/twofaPromise";

export enum ActionEnum  {
    GOAL_REACHED = 'goalReached',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    INPUT_2FA_CODE = 'input2FACode',
    GET_TEXT_CONTENT = 'getTextContent'
}

export abstract class Action<ResultType> {

    static async performActions(actions: Action<any>[], driver: Driver, params: any, twofaPromise: TwofaPromise | null) {
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

    constructor(action: ActionEnum, description: string, location: string, args: any, x: number, y: number) {
        this.action = action;
        this.description = description;
        this.location = location;
        this.args = args;
        this.x = x;
        this.y = y;
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

    async perform(driver: Driver, params: any, twofaPromise: TwofaPromise | null): Promise<ResultType> {
        switch (this.action) {
            case ActionEnum.LEFT_CLICK:
                return await (this as LeftClickAction).perform(driver, params, twofaPromise) as ResultType;
            case ActionEnum.INPUT_TEXT:
                return await (this as InputTextAction).perform(driver, params, twofaPromise) as ResultType;
            default:
                throw new Error(`Action ${this.action} not implemented`);
        }
    }

    toString(): string {
        return `Action: ${this.action}, Description: ${this.description}`;
    }
}

export class LeftClickAction extends Action<void> {
    constructor(description: string, location: string, args: any, x: number, y: number) {
        super(ActionEnum.LEFT_CLICK, description, location, args, x, y);

        // args should have 'navigation' field
        if(!args.hasOwnProperty('navigation')) {
            throw new Error('LeftClickAction requires args to have a navigation field');
        }
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
    constructor(description: string, location: string, args: any, x: number, y: number) {
        super(ActionEnum.INPUT_TEXT, description, location, args, x, y);

        // args should have 'text' field
        if(!args.hasOwnProperty('text')) {
            throw new Error('InputTextAction requires args to have a text field');
        }
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
