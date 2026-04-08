import { Driver, Element } from "../driver/driver";
import { AuthenticationError, DisconnectedError } from "../error";
import * as utils from "../utils";
import { Secret } from "./secret";

export enum ActionEnum  {
    NOOP = 'noop',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    RAISE_ERROR_IF_DISPLAYED = 'raiseErrorIfDisplayed',
}

export abstract class ActionV2<Context, Result> {

    static MAX_USAGE_COUNT = 2;

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
        // Check if obj.action exists
        if (!obj.hasOwnProperty('action')) {
            throw new Error(`Action object is missing 'action' field: ${JSON.stringify(obj)}`);
        }

        if (!ClassActionMap.hasOwnProperty(obj.action)) {
            throw new Error(`Action ${obj.action} not implemented`);
        }

        return new ClassActionMap[obj.action](
            obj.description,
            obj.pageUrlRegex,
            obj.cssSelector,
            obj.objectiveId,
            obj.lastUsed,
            obj.args,
            obj.destinationIds
        );
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
    lastUsed: string | null;
    args: any;
    destinationIds: string[];
    usageCount: number;

    constructor(
        action: ActionEnum,
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objectiveId: string | null,
        lastUsed: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        this.id = utils.hash_string(`${action}|${cssSelector}|${description}`, 'md5');
        this.action = action;
        this.pageUrlRegex = pageUrlRegex;
        this.cssSelector = cssSelector;
        this.description = description;
        this.objectiveId = objectiveId;
        this.lastUsed = lastUsed;
        this.args = args;
        this.destinationIds = destinationIds;
        this.usageCount = 0;
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
            // Prevent performing the same action more than MAX_USAGE_COUNT times
            if (this.usageCount >= ActionV2.MAX_USAGE_COUNT) {
                throw new Error(`Action "${this.description}" (${this.id}) has already been performed ${this.usageCount} times. Are you stuck in a loop?`);
            }
            this.usageCount++;
            this.lastUsed = new Date().toISOString();
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
    abstract canPerform(context: Context): Promise<boolean>;

    toString(): string {
        return this.description;
    }
}

export type NoopContext = {
    driver: Driver;
}

export class NoopAction extends ActionV2<NoopContext, void> {

    constructor(
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objectiveId: string | null,
        lastUsed: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        super(
            ActionEnum.NOOP,
            description,
            pageUrlRegex,
            cssSelector,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: NoopContext): Promise<void> {
        // Noop action does nothing
    }

    async canPerform(context: NoopContext): Promise<boolean> {
        return new RegExp(this.pageUrlRegex).test(context.driver.url());
    }
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
        objectiveId: string | null,
        lastUsed: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        // args should have 'navigation' field
        if(!args.hasOwnProperty('navigation')) {
            throw new Error('LeftClickAction requires args to have a "navigation" field');
        }

        super(
            ActionEnum.LEFT_CLICK,
            description,
            pageUrlRegex,
            cssSelector,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
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

    async canPerform(context: LeftClickContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
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
        objectiveId: string | null,
        lastUsed: string | null,
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

        super(
            ActionEnum.INPUT_TEXT,
            description,
            pageUrlRegex,
            cssSelector,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
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

    async canPerform(context: InputTextContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
    }
}

export type RaiseErrorContext = {
    driver: Driver;
}

export class RaiseErrorIfDisplayed extends ActionV2<RaiseErrorContext, void> {
    constructor(
        description: string,
        pageUrlRegex: string,
        cssSelector: string | null,
        objectiveId: string | null,
        lastUsed: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        // args should have 'default' field
        if(!args.hasOwnProperty('default')) {
            throw new Error('RaiseErrorIfDisplayed requires args to have a "default" field');
        }
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('RaiseErrorIfDisplayed requires a cssSelector to locate the element');
        }
        super(ActionEnum.RAISE_ERROR_IF_DISPLAYED,
            description,
            pageUrlRegex,
            cssSelector,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: RaiseErrorContext): Promise<void> {
        // Get element from cssSelector
        const element = await context.driver.getElement({
            selector: this.cssSelector,
            info: this.description
        }, {
            raiseException: false,
            ...this.args
        })
        // If element found, raise error
        if (element) {
            throw new AuthenticationError(await element.textContent(this.args.default), context.driver.collector);
        }
    }

    async canPerform(context: RaiseErrorContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
    }
}

export const ClassActionMap = {
    [ActionEnum.NOOP]: NoopAction,
    [ActionEnum.LEFT_CLICK]: LeftClickAction,
    [ActionEnum.INPUT_TEXT]: InputTextAction,
    [ActionEnum.RAISE_ERROR_IF_DISPLAYED]: RaiseErrorIfDisplayed,
}