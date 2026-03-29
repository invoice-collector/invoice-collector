import { Driver, Element } from "../driver/driver";
import { AuthenticationError, DisconnectedError } from "../error";
import * as utils from "../utils";
import { Secret } from "./secret";

export enum ActionEnum  {
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText'
}

export abstract class ActionV2<Context, Result> {

    static fromObjectList(objs: any): ActionV2<any, any>[] {
        // If objs is null or undefined or not an array, return empty array
        if (objs == null || objs == undefined || !Array.isArray(objs)) {
            return [];
        }

        const actions: ActionV2<any, any>[] = [];
        for (const obj of objs) {
            try {
                actions.push(ActionV2.fromObject(obj));
            }
            catch (e) {
                throw new Error(`Failed to parse actions for ${JSON.stringify(obj)}`, { cause: e });
            }
        }
        return actions;
    }

    static fromObject(obj: any): ActionV2<any, any> {
        switch (obj.action) {
            case ActionEnum.LEFT_CLICK:
                return new LeftClickAction(obj.description, obj.pageUrlRegex, obj.cssSelector, obj.objective, obj.args, obj.destinationIds);
            case ActionEnum.INPUT_TEXT:
                return new InputTextAction(obj.description, obj.pageUrlRegex, obj.cssSelector, obj.objective, obj.args, obj.destinationIds);
            default:
                throw new Error(`Action ${obj.action} not implemented`);
        }
    }

    static async performActions(actions: ActionV2<any, any>[], context: any): Promise<any> {
        for(const action of actions) {
            const result = await action.perform(context);
            if (result) {
                return result;
            }
        }
        return;
    }

    id: string;
    action: ActionEnum;
    pageUrlRegex: string;
    cssSelector: string | null;
    description: string;
    objectiveId: string | null;
    args: any;
    destinationIds: string[];

    constructor(
        action: ActionEnum,
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objectiveId: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        this.id = utils.hash_string(`${action}|${cssSelector}|${description}`, 'md5');
        this.action = action;
        this.pageUrlRegex = pageUrlRegex;
        this.cssSelector = cssSelector;
        this.description = description;
        this.objectiveId = objectiveId;
        this.args = args;
        this.destinationIds = destinationIds;
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
        else {
            throw new Error('No way to locate element, no cssSelector provided');
        }

        // If no element found, throw error
        if (!element) {
            throw new Error(`Element not found for action ${this.action}`);
        }

        return element;
    }

    async perform(context: Context): Promise<Result> {
        try {
            return await this._perform(context);
        }
        catch (e) {
            // Rethrow AuthenticationError and DisconnectedError
            if (e instanceof AuthenticationError || e instanceof DisconnectedError) {
                throw e;
            }
            // Wrap other errors
            throw new Error(`Error performing action ${this.toString()}`, { cause: e });
        }
    }

    abstract _perform(context: Context): Promise<Result>;
    abstract toString(): string;
}

export type LeftClickContext = {
    driver: Driver;
    element?: Element;
}

export class LeftClickAction extends ActionV2<LeftClickContext, void> {

    constructor(
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objective: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        // args should have 'navigation' field
        if(!args.hasOwnProperty('navigation')) {
            throw new Error('LeftClickAction requires args to have a "navigation" field');
        }

        super(ActionEnum.LEFT_CLICK, description, pageUrlRegex, cssSelector, objective, args, destinationIds);
    }

    async _perform(context: LeftClickContext): Promise<void> {
        if(context.element) {
            // Perform left click on provided element
            await context.element.leftClick(this.args);
            // Set element to undefined to avoid reuse for next actions
            context.element = undefined;
        }
        else {
            // Perform left click using driver and cssSelector
            await context.driver.leftClick({
                selector: this.cssSelector,
                info: this.description
            }, this.args);
        }
    }

    toString(): string {
        return `Left click on ${this.description}`;
    }
}

export type InputTextContext = {
    driver: Driver;
    secret: Secret;
}

export class InputTextAction extends ActionV2<InputTextContext, void> {
    constructor(
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objective: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        // args should have 'text' field
        if(!args.hasOwnProperty('text')) {
            throw new Error('InputTextAction requires args to have a "text" field');
        }
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('InputTextAction requires a cssSelector to locate the element');
        }

        super(ActionEnum.INPUT_TEXT, description, pageUrlRegex, cssSelector, objective, args, destinationIds);
    }

    async _perform(context: InputTextContext): Promise<void> {
        // Get params from secret
        const params = await context.secret.getParams();

        // If parameter exists
        if(!params.hasOwnProperty(this.args.text)) {
            throw new Error(`Parameter ${this.args.text} not found in params`);
        }

        await context.driver.inputText({
                selector: this.cssSelector,
                info: this.description
            }, params[this.args.text], this.args);
    }

    toString(): string {
        return `Input ${this.args.text} into field ${this.description}`;
    }
}
