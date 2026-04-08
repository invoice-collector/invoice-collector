import { Driver, Element } from "../driver/driver";
import { AuthenticationError, DisconnectedError } from "../error";
import * as utils from "../utils";
import { Secret } from "./secret";
import { WebSocketServer } from "../websocket/webSocketServer";

export enum ActionEnum  {
    NOOP = 'noop',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    INPUT_2FA_CODE = 'input2FACode',
    RAISE_ERROR_IF_DISPLAYED = 'raiseErrorIfDisplayed',
}

export abstract class ActionV2<Context, Args, Result> {

    static MAX_USAGE_COUNT = 2;

    static fromObjectList(objs: any): ActionV2<any, any, any>[] {
        // If objs is null or undefined or not an array, return empty array
        if (objs == null || objs == undefined || !Array.isArray(objs)) {
            return [];
        }

        const actions: ActionV2<any, any, any>[] = [];
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

    static fromObject(obj: any): ActionV2<any, any, any> {
        // Check if obj.action exists
        if (!obj.hasOwnProperty('action')) {
            throw new Error(`Action object is missing 'action' field: ${JSON.stringify(obj)}`);
        }

        if (!ClassActionMap.hasOwnProperty(obj.action)) {
            throw new Error(`Action ${obj.action} not implemented`);
        }

        return new ClassActionMap[obj.action](
            obj.id,
            obj.description,
            obj.pageUrlRegex,
            obj.objectiveId,
            obj.lastUsed,
            obj.args,
            obj.destinationIds
        );
    }

    static async performActions(actions: ActionV2<any, any, any>[], context: any): Promise<any> {
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
    description: string;
    objectiveId: string | null;
    lastUsed: string | null;
    args: any;
    destinationIds: string[];
    usageCount: number;

    constructor(
        id: string | null,
        action: ActionEnum,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: any,
        destinationIds: string[] = []
    ) {
        this.id = id || utils.hash_string(`${action}|${args}`, 'md5');
        this.action = action;
        this.pageUrlRegex = pageUrlRegex;
        this.description = description;
        this.objectiveId = objectiveId;
        this.lastUsed = lastUsed;
        this.args = args;
        this.destinationIds = destinationIds;
        this.usageCount = 0;
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

export type NoopArgs = {
}

export class NoopAction extends ActionV2<NoopContext, NoopArgs, void> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: NoopArgs,
        destinationIds: string[] = []
    ) {
        super(
            id,
            ActionEnum.NOOP,
            description,
            pageUrlRegex,
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

export type LeftClickArgs = {
    cssSelector: string;
    raiseException?: boolean;
    timeout?: number;
    delay?: number;
    navigation?: boolean;
    mouseHover?: boolean;
}

export class LeftClickAction extends ActionV2<LeftClickContext, LeftClickArgs, void> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: LeftClickArgs,
        destinationIds: string[] = []
    ) {
        // args should have 'cssSelector' field
        if(!args.cssSelector) {
            throw new Error('LeftClickAction requires args to have a "cssSelector" field');
        }
        // args should have 'navigation' field
        if(args.navigation === undefined) {
            throw new Error('LeftClickAction requires args to have a "navigation" field');
        }

        super(
            id,
            ActionEnum.LEFT_CLICK,
            description,
            pageUrlRegex,
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
                selector: this.args.cssSelector,
                info: this.description
            }, this.args);
        }
    }

    async canPerform(context: LeftClickContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
    }
}

export type InputTextContext = {
    driver: Driver;
    secret: Secret;
}

export type InputTextArgs = {
    cssSelector: string;
    text: string;
    raiseException?: boolean;
    timeout?: number;
    delay?: number;
    tries?: number;
    mouseHover?: boolean;
}

export class InputTextAction extends ActionV2<InputTextContext, InputTextArgs, void> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: InputTextArgs,
        destinationIds: string[] = []
    ) {
        // Check if cssSelector is provided
        if (!args.cssSelector) {
            throw new Error('InputTextAction requires a cssSelector to locate the element');
        }
        // args should have 'text' field
        if(!args.text) {
            throw new Error('InputTextAction requires args to have a "text" field');
        }

        super(
            id,
            ActionEnum.INPUT_TEXT,
            description,
            pageUrlRegex,
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
                selector: this.args.cssSelector,
                info: this.description
            }, params[this.args.text], this.args);
    }

    async canPerform(context: InputTextContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
    }
}

export type RaiseErrorContext = {
    driver: Driver;
}

export type RaiseErrorArgs = {
    cssSelector: string;
    default: string;
}

export class RaiseErrorIfDisplayed extends ActionV2<RaiseErrorContext, RaiseErrorArgs, void> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: RaiseErrorArgs,
        destinationIds: string[] = []
    ) {
        // Check if cssSelector is provided
        if (!args.cssSelector) {
            throw new Error('RaiseErrorIfDisplayed requires a cssSelector to locate the element');
        }
        // args should have 'default' field
        if(!args.default) {
            throw new Error('RaiseErrorIfDisplayed requires args to have a "default" field');
        }
        super(
            id,
            ActionEnum.RAISE_ERROR_IF_DISPLAYED,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: RaiseErrorContext): Promise<void> {
        // Get element from cssSelector
        const element = await context.driver.getElement({
            selector: this.args.cssSelector,
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
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el !== null;
    }
}

export type InputTwofaContext = {
    driver: Driver;
    webSocketServer: WebSocketServer | undefined;
}

export type InputTwofaArgs = {
    instructionsCssSelector: string;
    inputCssSelector: string;
}

export class InputTwofaAction extends ActionV2<InputTwofaContext, InputTwofaArgs, void> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: InputTwofaArgs,
        destinationIds: string[] = []
    ) {
        if (!args.instructionsCssSelector) {
            throw new Error('InputTwofaAction requires args to have an "instructionsCssSelector" field');
        }
        if (!args.inputCssSelector) {
            throw new Error('InputTwofaAction requires args to have an "inputCssSelector" field');
        }
        super(
            id,
            ActionEnum.INPUT_2FA_CODE,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: InputTwofaContext): Promise<void> {
        // If the webSocketServer is undefined, it means that the session has expired
        if (!context.webSocketServer) {
            throw new DisconnectedError(context.driver.collector);
        }
        // Get instructions element
        const instructionsElement = await context.driver.getElement({
            selector: this.args.instructionsCssSelector,
            info: this.description
        });
        // If no instructions element found, throw error
        if (!instructionsElement) {
            throw new Error(`Instructions element not found for selector ${this.args.instructionsCssSelector}`);
        }
        // Get instructions text
        const instructionsText = await instructionsElement.textContent("i18n.collectors.all.2fa.instruction");
        // Get 2fa code from user
        const code = await context.webSocketServer.getTwofa(instructionsText);
        // Input code into the field
        await context.driver.inputText({
            selector: this.args.inputCssSelector,
            info: this.description
        }, code, this.args);
    }

    async canPerform(context: InputTwofaContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el1 = await context.driver.getElement({ selector: this.args.inputCssSelector }, { raiseException: false, timeout: 100 });
        const el2 = await context.driver.getElement({ selector: this.args.instructionsCssSelector }, { raiseException: false, timeout: 100 });
        return el1 !== null && el2 !== null;
    }
}

export const ClassActionMap = {
    [ActionEnum.NOOP]: NoopAction,
    [ActionEnum.LEFT_CLICK]: LeftClickAction,
    [ActionEnum.INPUT_TEXT]: InputTextAction,
    [ActionEnum.INPUT_2FA_CODE]: InputTwofaAction,
    [ActionEnum.RAISE_ERROR_IF_DISPLAYED]: RaiseErrorIfDisplayed,
}