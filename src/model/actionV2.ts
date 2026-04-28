import { Driver, Element } from "../driver/driver";
import { AuthenticationError, DisconnectedError } from "../error";
import * as utils from "../utils";
import { Invoice } from "../collectors/abstractCollector";
import { Secret } from "./secret";
import { WebSocketServer } from "../websocket/webSocketServer";

export enum ActionEnum  {
    NOOP = 'noop',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    INPUT_2FA_CODE = 'input2FACode',
    ERROR_DISPLAYED = 'errorDisplayed',
    GET_INVOICES = 'getInvoices',
    EXTRACT_INVOICE_DATA = 'extractInvoiceData',
    MIDDLE_CLICK = 'middleClick',
}

export abstract class ActionV2<InputContext, Args, OutputContext> {

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
    args: Args;
    destinationIds: string[];

    constructor(
        id: string | null,
        action: ActionEnum,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: Args,
        destinationIds: string[] = []
    ) {
        this.id = id || utils.hash_string(`${action}|${JSON.stringify(args)}`, 'md5');
        this.action = action;
        this.pageUrlRegex = pageUrlRegex;
        this.description = description;
        this.objectiveId = objectiveId;
        this.lastUsed = lastUsed;
        this.args = args;
        this.destinationIds = destinationIds;
    }

    async perform(context: InputContext): Promise<OutputContext | OutputContext[]> {
        try {
            this.lastUsed = new Date().toISOString();
            return await this._perform(context);
        }
        catch (e) {
            // Rethrow AuthenticationError and DisconnectedError
            if (e instanceof AuthenticationError || e instanceof DisconnectedError) {
                throw e;
            }
            // Wrap other errors
            throw new Error(`Error performing action ${JSON.stringify(this)}`, { cause: e });
        }
    }

    abstract _perform(context: InputContext): Promise<OutputContext | OutputContext[]>;
    abstract canPerform(context: InputContext): Promise<boolean>;

    toString(): string {
        return this.description;
    }
}

export type NoopContext = {
    driver: Driver;
}

export type NoopArgs = {
}

export class NoopAction extends ActionV2<NoopContext, NoopArgs, NoopContext> {

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
            id || utils.generate_token(16),
            ActionEnum.NOOP,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: NoopContext): Promise<NoopContext> {
        // Wait for page to load
        await context.driver.waitForNavigation();
        return context;
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

export class LeftClickAction extends ActionV2<LeftClickContext, LeftClickArgs, LeftClickContext> {

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

    async _perform(context: LeftClickContext): Promise<LeftClickContext> {
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
        // Return context
        return context;
    }

    async canPerform(context: LeftClickContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
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

export class InputTextAction extends ActionV2<InputTextContext, InputTextArgs, InputTextContext> {
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

    async _perform(context: InputTextContext): Promise<InputTextContext> {
        // Get params from secret
        const params = await context.secret.getParams();

        // If parameter exists
        if(!params.hasOwnProperty(this.args.text)) {
            throw new Error(`Parameter ${this.args.text} not found in params`);
        }
        // Input text into the field
        await context.driver.inputText({
                selector: this.args.cssSelector,
                info: this.description
            }, params[this.args.text], this.args);
        // Return same context
        return context;
    }

    async canPerform(context: InputTextContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }
}

export type RaiseErrorContext = {
    driver: Driver;
}

export type RaiseErrorArgs = {
    cssSelector: string;
    default: string;
}

export class ErrorDisplayedAction extends ActionV2<RaiseErrorContext, RaiseErrorArgs, RaiseErrorContext> {
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
            throw new Error('ErrorDisplayed requires a cssSelector to locate the element');
        }
        // args should have 'default' field
        if(!args.default) {
            throw new Error('ErrorDisplayed requires args to have a "default" field');
        }
        super(
            id,
            ActionEnum.ERROR_DISPLAYED,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: RaiseErrorContext): Promise<RaiseErrorContext> {
        // Get element from cssSelector
        const element = await context.driver.getElement({
            selector: this.args.cssSelector,
            info: this.description
        }, {
            raiseException: false
        })
        // If element found, raise error
        if (element) {
            // Get text content of element
            const errorMessage = await element.textContent(this.args.default);
            // Raise error with text content
            throw new AuthenticationError(errorMessage, context.driver.collector);
        }
        // Return same context
        return context;
    }

    async canPerform(context: RaiseErrorContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }
}

export type InputTwofaContext = {
    driver: Driver;
    webSocketServer: WebSocketServer | undefined;
}

export type InputTwofaArgs = {
    instructionsCssSelector: string;
    inputCssSelector: string;
    raiseException?: boolean;
    timeout?: number;
    delay?: number;
    tries?: number;
    navigation?: boolean;
    mouseHover?: boolean;
}

export class InputTwofaAction extends ActionV2<InputTwofaContext, InputTwofaArgs, InputTwofaContext> {
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

    async _perform(context: InputTwofaContext): Promise<InputTwofaContext> {
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
        // Return same context
        return context;
    }

    async canPerform(context: InputTwofaContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const [el1, el2] = await Promise.all([
            context.driver.getElement({ selector: this.args.inputCssSelector }, { raiseException: false, timeout: 100 }),
            context.driver.getElement({ selector: this.args.instructionsCssSelector }, { raiseException: false, timeout: 100 }),
        ]);
        const [el1Clickable, el2Clickable] = await Promise.all([
            el1 ? el1.isClickable() : false,
            el2 ? el2.isClickable() : false,
        ]);
        return el1Clickable && el2Clickable;
    }
}

export type GetInvoicesInputContext = {
    driver: Driver;
}

export type GetInvoicesOutputContext = {
    driver: Driver;
    element: Element;
}

export type GetInvoicesArgs = {
    cssSelector: string;
}

export class GetInvoicesAction extends ActionV2<GetInvoicesInputContext, GetInvoicesArgs, GetInvoicesOutputContext> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: GetInvoicesArgs,
        destinationIds: string[] = []
    ) {
        if (!args.cssSelector) {
            throw new Error('GetInvoicesAction requires args to have a "cssSelector" field');
        }
        super(
            id,
            ActionEnum.GET_INVOICES,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: GetInvoicesInputContext): Promise<GetInvoicesOutputContext[]> {
        const elements = await context.driver.getElements({
            selector: this.args.cssSelector,
            info: this.description
        });
        // Return new context with elements
        let outputContexts: GetInvoicesOutputContext[] = [];
        for (const element of elements) {
            if (await element.isClickable()) {
                outputContexts.push({
                    driver: context.driver,
                    element: element
                });
            }
        }
        return outputContexts;
    }

    async canPerform(context: GetInvoicesInputContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }
}

export type ExtractInvoiceDataInputContext = {
    driver: Driver;
    element: Element;
}

export type ExtractInvoiceDataOutputContext = {
    driver: Driver;
    invoice: Invoice;
    element: Element;
}

export type ExtractInvoiceDataArgs = {
    id?: { cssSelector: string; attribute?: string };
    amount?: { cssSelector: string; attribute?: string };
    date: { cssSelector: string; attribute?: string; format: string; locale?: string };
    download: { cssSelector: string };
}

export class ExtractInvoiceDataAction extends ActionV2<ExtractInvoiceDataInputContext, ExtractInvoiceDataArgs, ExtractInvoiceDataOutputContext> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: ExtractInvoiceDataArgs,
        destinationIds: string[] = []
    ) {
        if (!args.date) {
            throw new Error('ExtractInvoiceDataAction requires args to have a "date" field');
        }
        if (!args.download) {
            throw new Error('ExtractInvoiceDataAction requires args to have a "download" field');
        }
        super(
            id,
            ActionEnum.EXTRACT_INVOICE_DATA,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: ExtractInvoiceDataInputContext): Promise<ExtractInvoiceDataOutputContext> {
        const link = context.driver.url();
        const date = await context.element.getAttribute({selector: this.args.date.cssSelector, info: "date"}, this.args.date.attribute || "textContent");
        const timestamp = utils.timestampFromString(date, this.args.date.format, this.args.date.locale || 'en');
        const downloadElement = await context.element.getElement({selector: this.args.download.cssSelector, info: "download button"});

        // Get amount if selector provided
        let amount: string | undefined;
        if(this.args.amount) {
            amount = await context.element.getAttribute({selector: this.args.amount.cssSelector, info: "amount"}, this.args.amount.attribute || "textContent");
            utils.checkAmountContainsCurrencySymbol(amount);
        }

        // Get id if selector provided
        let id: string;
        if(this.args.id) {
            id = await context.element.getAttribute({selector: this.args.id.cssSelector, info: "id"}, this.args.id.attribute || "textContent");
        }
        else if (amount) {
            id = utils.hash_string(`${date}${amount}`);
        }
        else {
            id = utils.hash_string(`${date}`);
        }

        return {
            driver: context.driver,
            invoice: {
                id: id.trim().replace(/[/\\?%*:|"<>]/g, '-'),
                link: link.trim(),
                timestamp: timestamp,
                amount: amount?.trim(),
                downloadButton: downloadElement,
                metadata: {}
            },
            element: downloadElement
        }
    }

    async canPerform(context: ExtractInvoiceDataInputContext): Promise<boolean> {
        if(!context.element) {
            return false;
        }
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const [idElement, amountElement, dateElement, downloadElement] = await Promise.all([
            this.args.id ? context.element.getElement({ selector: this.args.id.cssSelector }, { raiseException: false}) : null,
            this.args.amount ? context.element.getElement({ selector: this.args.amount.cssSelector }, { raiseException: false }) : null,
            context.element.getElement({ selector: this.args.date.cssSelector }, { raiseException: false }),
            context.element.getElement({ selector: this.args.download.cssSelector }, { raiseException: false }),
        ]);
        const [idElementClickable, amountElementClickable, dateElementClickable, downloadElementClickable] = await Promise.all([
            idElement?.isClickable() || true,
            amountElement?.isClickable() || true,
            dateElement?.isClickable() || false,
            downloadElement?.isClickable() || false,
        ]);
        return idElementClickable && amountElementClickable && dateElementClickable && downloadElementClickable;
    }
}

export type MiddleClickContext = {
    driver: Driver;
    element?: Element;
}

export type MiddleClickArgs = {
    cssSelector: string;
    raiseException?: boolean;
}

export class MiddleClickAction extends ActionV2<MiddleClickContext, MiddleClickArgs, MiddleClickContext> {
    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: MiddleClickArgs,
        destinationIds: string[] = []
    ) {
        if (!args.cssSelector) {
            throw new Error('MiddleClickAction requires args to have a "cssSelector" field');
        }
        super(
            id,
            ActionEnum.MIDDLE_CLICK,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: MiddleClickContext): Promise<MiddleClickContext> {
        let element: Element | null = context.element || null
    
        if (!element) {
            element = await context.driver.getElement({
                selector: this.args.cssSelector,
                info: this.description
            });
        }

        // If no element found, throw error
        if (!element) {
            throw new Error(`Element not found for action ${this.action}`);
        }
        
        try {
            // Perform middle click
            await element.middleClick();
        } catch (error) {
            // If error occurs, it may be because middle click is not supported and a simple click was already performed
        }

        // Set element to undefined to avoid reuse for next actions
        context.element = undefined;
        return context;
    }

    async canPerform(context: MiddleClickContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        if (context.element) {
            return await context.element.isClickable();
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    toString(): string {
        return `Middle click on ${this.description}`;
    }
}

export const ClassActionMap = {
    [ActionEnum.NOOP]: NoopAction,
    [ActionEnum.LEFT_CLICK]: LeftClickAction,
    [ActionEnum.INPUT_TEXT]: InputTextAction,
    [ActionEnum.INPUT_2FA_CODE]: InputTwofaAction,
    [ActionEnum.ERROR_DISPLAYED]: ErrorDisplayedAction,
    [ActionEnum.GET_INVOICES]: GetInvoicesAction,
    [ActionEnum.EXTRACT_INVOICE_DATA]: ExtractInvoiceDataAction,
    [ActionEnum.MIDDLE_CLICK]: MiddleClickAction,
}