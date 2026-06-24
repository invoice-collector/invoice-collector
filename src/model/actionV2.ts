import { Driver, Element } from "../driver/driver";
import { AuthenticationError, DisconnectedError, NoInvoiceFoundError } from "../error";
import * as utils from "../utils";
import { Invoice } from "../collectors/abstractCollector";
import { Secret } from "./secret";
import { WebSocketServer } from "../websocket/webSocketServer";

export enum ActionEnum  {
    NOOP = 'noop',
    LEFT_CLICK = 'leftClick',
    INPUT_TEXT = 'inputText',
    ERROR_DISPLAYED = 'errorDisplayed',
    INPUT_2FA_CODE = 'input2FACode',
    GET_INVOICES = 'getInvoices',
    ERROR_NO_INVOICES = 'errorNoInvoices',
    EXTRACT_INVOICE_DATA = 'extractInvoiceData',
    MIDDLE_CLICK = 'middleClick',
    CUSTOM = 'custom',
    ERROR_LOGIN_PAGE_DISPLAYED = 'errorLoginPageDisplayed',
    WAIT = 'wait',
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
        this.id = id || utils.hash_string(`${action}|${pageUrlRegex}|${objectiveId}|${JSON.stringify(args)}`, 'md5');
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
            console.log(`Performing action ${this.id}: ${this.description}`);
            this.lastUsed = new Date().toISOString();
            return await this._perform(context);
        }
        catch (e) {
            // Rethrow AuthenticationError, DisconnectedError and NoInvoiceFoundError
            if (e instanceof AuthenticationError || e instanceof DisconnectedError || e instanceof NoInvoiceFoundError) {
                throw e;
            }
            // Wrap other errors
            throw new Error(`Error performing action ${JSON.stringify(this)}`, { cause: e });
        }
    }

    abstract _perform(context: InputContext): Promise<OutputContext | OutputContext[]>;
    abstract canPerform(context: InputContext): Promise<boolean>;
    abstract canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean;

    toString(): string {
        return this.description;
    }
}

export type NoopContext = {
    driver: Driver;
}

export type NoopArgs = {
    contextContains?: string[];
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

    async _perform(context: NoopContext): Promise<NoopContext> {
        // Wait for page to load
        await context.driver.waitForNavigation();
        return context;
    }

    async canPerform(context: NoopContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        // Check if context contains specified fields
        if (this.args.contextContains) {
            for (const field of this.args.contextContains) {
                if (!(field in context)) {
                    return false;
                }
            }
        }
        return true;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction !== ActionEnum.GET_INVOICES &&
        previousAction !== ActionEnum.EXTRACT_INVOICE_DATA &&
        previousAction !== ActionEnum.NOOP;
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
        if (context.element) {
            return await context.element.isClickable();
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction !== ActionEnum.GET_INVOICES;
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

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction !== ActionEnum.GET_INVOICES &&
        previousAction !== ActionEnum.EXTRACT_INVOICE_DATA;
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
        // If element not found, raise error
        if (!element) {
            throw new Error(`Element not found for action ${this.action}, this action should only be performed if the element is present`);
        }
        // Get text content of element
        const errorMessage = await element.textContent(this.args.default);
        // Raise error with text content
        throw new AuthenticationError(errorMessage, context.driver.collector);
    }

    async canPerform(context: RaiseErrorContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return (
            previousAction === ActionEnum.LEFT_CLICK &&
            (
                secondPreviousAction === ActionEnum.INPUT_TEXT ||
                secondPreviousAction === ActionEnum.INPUT_2FA_CODE
            )
        ) ||
        previousAction === ActionEnum.INPUT_2FA_CODE ||
        previousAction === ActionEnum.CUSTOM;
    }
}

export type InputTwofaContext = {
    driver: Driver;
    webSocketServer: WebSocketServer | undefined;
}

export type InputTwofaArgs = {
    push: boolean;
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
            throw new DisconnectedError('i18n.collectors.all.login.expired', context.driver.collector);
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
        const code = await Promise.race([
            context.webSocketServer.getTwofa(instructionsText),
            context.webSocketServer.twofa_promise.code(instructionsText)
        ]);
        // If it is not a push notification
        if(!this.args.push) {
            // Input code into the field
            await context.driver.inputText({
                selector: this.args.inputCssSelector,
                info: this.description
            }, code, this.args);
        }
        else {
            await context.driver.waitForNavigation({
                timeout: this.args.timeout
            });
        }
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
    
    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.LEFT_CLICK ||
        previousAction === ActionEnum.WAIT ||
        previousAction === ActionEnum.CUSTOM;
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

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.LEFT_CLICK ||
        previousAction === ActionEnum.NOOP ||
        previousAction === ActionEnum.CUSTOM;
    }
}

export type ErrorNoInvoicesContext = {
    driver: Driver;
}

export type ErrorNoInvoicesArgs = {
    cssSelector: string;
}

export class ErrorNoInvoicesAction extends ActionV2<ErrorNoInvoicesContext, ErrorNoInvoicesArgs, ErrorNoInvoicesContext> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: ErrorNoInvoicesArgs,
        destinationIds: string[] = []
    ) {
        // Check if cssSelector is provided
        if (!args.cssSelector) {
            throw new Error('ErrorNoInvoices requires a cssSelector to locate the element');
        }
        super(
            id,
            ActionEnum.ERROR_NO_INVOICES,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: ErrorNoInvoicesContext): Promise<ErrorNoInvoicesContext> {
        // Get element from cssSelector
        await context.driver.getElement({
            selector: this.args.cssSelector,
            info: this.description
        })
        // Throw specific error to signal no invoices found
        throw new NoInvoiceFoundError(context.driver.collector);
    }

    async canPerform(context: ErrorNoInvoicesContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.LEFT_CLICK ||
        previousAction === ActionEnum.NOOP ||
        previousAction === ActionEnum.CUSTOM;
    }
}

export type ExtractInvoiceDataInputContext = {
    driver: Driver;
    element: Element;
}

export type ExtractInvoiceDataOutputContext = {
    driver: Driver;
    invoice: Invoice;
    element?: Element;
}

export type ExtractInvoiceDataArgs = {
    id?: { cssSelector: string; attribute?: string; excludes?: string[] };
    amount?: { cssSelector: string; attribute?: string; excludes?: string[] };
    currency?: { cssSelector: string; attribute?: string; excludes?: string[] };
    date: { cssSelector: string; attribute?: string; format: string; locale?: string; excludes?: string[] };
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

        // Check if date value should exclude download
        let skipDownload = this.args.date.excludes?.includes(date) ?? false;

        // Get amount if selector provided
        let amount: string | undefined;
        if(this.args.amount) {
            amount = await context.element.getAttribute({selector: this.args.amount.cssSelector, info: "amount"}, this.args.amount.attribute || "textContent");
            if (this.args.amount.excludes?.includes(amount)) skipDownload = true;
            if(this.args.currency) {
                const currency = await context.element.getAttribute({selector: this.args.currency.cssSelector, info: "currency"}, this.args.currency.attribute || "textContent");
                if (this.args.currency.excludes?.includes(currency)) skipDownload = true;
                amount = `${amount} ${currency}`;
            }
            utils.checkAmountContainsCurrencySymbol(amount);
        }

        // Get id if selector provided
        let id: string;
        if(this.args.id) {
            id = await context.element.getAttribute({selector: this.args.id.cssSelector, info: "id"}, this.args.id.attribute || "textContent");
            if (this.args.id.excludes?.includes(id)) skipDownload = true;
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
            element: skipDownload ? undefined : downloadElement
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

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.GET_INVOICES ||
        previousAction === ActionEnum.CUSTOM;
    }
}

export type MiddleClickContext = {
    driver: Driver;
    element?: Element;
}

export type MiddleClickArgs = {
    cssSelector?: string;
    raiseException?: boolean;
    timeout?: number;
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
            await element.middleClick({ timeout: this.args.timeout });
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
        if(!this.args.cssSelector) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction == ActionEnum.EXTRACT_INVOICE_DATA ||
        previousAction === ActionEnum.CUSTOM;
    }

    toString(): string {
        return `Middle click on ${this.description}`;
    }
}

export type CustomContext = {
    driver: Driver;
}

export type CustomArgs = {
    [key: string]: any;
}

export class CustomAction extends ActionV2<CustomContext, CustomArgs, CustomContext> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: CustomArgs,
        destinationIds: string[] = []
    ) {
        super(
            id,
            ActionEnum.CUSTOM,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: CustomContext): Promise<CustomContext> {
        return context;
    }

    async canPerform(context: CustomContext): Promise<boolean> {
        return new RegExp(this.pageUrlRegex).test(context.driver.url());
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return true;
    }
}

export type ErrorLoginPageDisplayedContext = {
    driver: Driver;
}

export type ErrorLoginPageDisplayedArgs = {
    cssSelector: string;
}

export class ErrorLoginPageDisplayedAction extends ActionV2<ErrorLoginPageDisplayedContext, ErrorLoginPageDisplayedArgs, ErrorLoginPageDisplayedContext> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: ErrorLoginPageDisplayedArgs,
        destinationIds: string[] = []
    ) {
        if (!args.cssSelector) {
            throw new Error('ErrorLoginPageDisplayedAction requires a cssSelector to locate the input field');
        }
        super(
            id,
            ActionEnum.ERROR_LOGIN_PAGE_DISPLAYED,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: ErrorLoginPageDisplayedContext): Promise<ErrorLoginPageDisplayedContext> {
        // Raise DisconnectedError to signal that the login page is displayed and the session has expired
        throw new DisconnectedError('i18n.collectors.all.login.expired', context.driver.collector);
    }

    async canPerform(context: ErrorLoginPageDisplayedContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        const el = await context.driver.getElement({ selector: this.args.cssSelector }, { raiseException: false, timeout: 100 });
        return el?.isClickable() || false;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.LEFT_CLICK ||
        previousAction === ActionEnum.WAIT ||
        previousAction === null;
    }
}

export type WaitContext = {
    driver: Driver;
}

export type WaitArgs = {
    delay: number;
}

export class WaitAction extends ActionV2<WaitContext, WaitArgs, WaitContext> {

    constructor(
        id: string | null,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: WaitArgs,
        destinationIds: string[] = []
    ) {
        if (args.delay === undefined || args.delay < 0) {
            throw new Error('WaitAction requires args to have a "delay" field with a non-negative value');
        }
        super(
            id,
            ActionEnum.WAIT,
            description,
            pageUrlRegex,
            objectiveId,
            lastUsed,
            args,
            destinationIds
        );
    }

    async _perform(context: WaitContext): Promise<WaitContext> {
        // Wait for the specified delay in milliseconds
        await utils.delay(this.args.delay);
        return context;
    }

    async canPerform(context: WaitContext): Promise<boolean> {
        if (!new RegExp(this.pageUrlRegex).test(context.driver.url())) {
            return false;
        }
        return true;
    }

    canFollow(previousAction: ActionEnum | null, secondPreviousAction: ActionEnum | null): boolean {
        return previousAction === ActionEnum.MIDDLE_CLICK ||
        previousAction === ActionEnum.LEFT_CLICK;
    }
}

export const ClassActionMap = {
    [ActionEnum.NOOP]: NoopAction,
    [ActionEnum.LEFT_CLICK]: LeftClickAction,
    [ActionEnum.INPUT_TEXT]: InputTextAction,
    [ActionEnum.INPUT_2FA_CODE]: InputTwofaAction,
    [ActionEnum.ERROR_DISPLAYED]: ErrorDisplayedAction,
    [ActionEnum.GET_INVOICES]: GetInvoicesAction,
    [ActionEnum.ERROR_NO_INVOICES]: ErrorNoInvoicesAction,
    [ActionEnum.EXTRACT_INVOICE_DATA]: ExtractInvoiceDataAction,
    [ActionEnum.MIDDLE_CLICK]: MiddleClickAction,
    [ActionEnum.CUSTOM]: CustomAction,
    [ActionEnum.WAIT]: WaitAction,
    [ActionEnum.ERROR_LOGIN_PAGE_DISPLAYED]: ErrorLoginPageDisplayedAction,
}