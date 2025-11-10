import { Driver, Element } from "../driver/driver";
import { TwofaPromise } from "../collect/twofaPromise";
import * as utils from '../utils';
import { Invoice } from "../collectors/abstractCollector";
import { ElementNotFoundError } from "../error";

export enum ActionEnum  {
    GOAL_REACHED = 'goalReached',
    LEFT_CLICK = 'leftClick',
    MIDDLE_CLICK = 'middleClick',
    INPUT_TEXT = 'inputText',
    GET_TEXT_CONTENT = 'getTextContent',
    INPUT_2FA_CODE = 'input2FACode',
    GET_TWOFA_INSTRUCTIONS = 'get2FAInstructions',
    GET_INVOICES = 'getInvoices',
    EXTRACT_INVOICE_DATA = 'extractInvoiceData'
}

export abstract class Action<Context, Result> {

    static fromObject(obj: any): Action<any, any> {
        switch (obj.action) {
            case ActionEnum.LEFT_CLICK:
                return new LeftClickAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.MIDDLE_CLICK:
                return new MiddleClickAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.INPUT_TEXT:
                return new InputTextAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.GET_TEXT_CONTENT:
                return new GetTextContentAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.INPUT_2FA_CODE:
                return new InputTwofaAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.GET_TWOFA_INSTRUCTIONS:
                return new GetTwofaInstructionsAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.GET_INVOICES:
                return new GetInvoicesAction(obj.description, obj.location, obj.args, obj.cssSelector);
            case ActionEnum.EXTRACT_INVOICE_DATA:
                return new ExtractInvoiceDataAction(obj.description, obj.location, obj.args, obj.cssSelector);
            default:
                throw new Error(`Action ${obj.action} not implemented`);
        }
    }

    static async performActions(actions: Action<any, any>[], context: any): Promise<any> {
        for(const action of actions) {
            const result = await action.perform(context);
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
    cssSelector?: string;

    constructor(action: ActionEnum, description: string, location: string, args: any, cssSelector?: string) {
        this.action = action;
        this.description = description;
        this.location = location;
        this.args = args;
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
        else {
            throw new Error('No way to locate element, no cssSelector provided');
        }

        // If no element found, throw error
        if (!element) {
            throw new Error(`Element not found for action ${this.action}`);
        }

        return element;
    }

    abstract perform(context: Context): Promise<Result>;

    toString(): string {
        return `Action: ${this.action}, Description: ${this.description}`;
    }
}

export type LeftClickContext = {
    driver: Driver;
}

export class LeftClickAction extends Action<LeftClickContext, void> {

    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // args should have 'navigation' field
        if(!args.hasOwnProperty('navigation')) {
            throw new Error('LeftClickAction requires args to have a "navigation" field');
        }

        super(ActionEnum.LEFT_CLICK, description, location, args, cssSelector);
    }

    async perform(context: LeftClickContext): Promise<void> {
        let element: Element = await this.getElement(context.driver);
        await element.click({
            navigation: this.args.navigation
        });
    }

    toString(): string {
        return `Left click on ${this.description}`;
    }
}

export type MiddleClickContext = {
    driver: Driver;
    element?: Element;
}

export class MiddleClickAction extends Action<MiddleClickContext, void> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        super(ActionEnum.MIDDLE_CLICK, description, location, args, cssSelector);
    }

    async perform(context: MiddleClickContext): Promise<void> {
        let element: Element = context.element || await this.getElement(context.driver);
        
        try {
            // Perform middle click and replace the driver
            context.driver = await element.middleClick();
        } catch (error) {
            // If error occurs, it may be because middle click is not supported and a simple click was already performed
        }
    }

    toString(): string {
        return `Middle click on ${this.description}`;
    }
}

export type InputTextContext = {
    driver: Driver;
    params: any;
}

export class InputTextAction extends Action<InputTextContext, void> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // args should have 'text' field
        if(!args.hasOwnProperty('text')) {
            throw new Error('InputTextAction requires args to have a "text" field');
        }
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('InputTextAction requires a cssSelector to locate the element');
        }

        super(ActionEnum.INPUT_TEXT, description, location, args, cssSelector);
    }

    async perform(context: InputTextContext): Promise<void> {
        // If parameter exists
        if(!context.params.hasOwnProperty(this.args.text)) {
            throw new Error(`Parameter ${this.args.text} not found in params`);
        }

        let element: Element = await this.getElement(context.driver);
        await element.inputText(context.params[this.args.text], this.args);
    }

    toString(): string {
        return `Input ${this.args.text} into field ${this.description}`;
    }
}

export type GetTextContentContext = {
    driver: Driver;
}

export class GetTextContentAction extends Action<GetTextContentContext, string> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // args should have 'default' field
        if(!args.hasOwnProperty('default')) {
            throw new Error('GetTextContentAction requires args to have a "default" field');
        }
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('GetTextContentAction requires a cssSelector to locate the element');
        }

        super(ActionEnum.GET_TEXT_CONTENT, description, location, args, cssSelector);
    }

    async perform(context: GetTextContentContext): Promise<string> {
        let element: Element = await this.getElement(context.driver);
        return await element.textContent(this.args.default);
    }

    toString(): string {
        return `Get text content from field ${this.description}`;
    }
}

export type InputTwofaContext = {
    driver: Driver;
    twofaPromise: TwofaPromise;
}

export class InputTwofaAction extends Action<InputTwofaContext, void> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('InputTwofaAction requires a cssSelector to locate the element');
        }
        super(ActionEnum.INPUT_2FA_CODE, description, location, args, cssSelector);
    }

    async perform(context: InputTwofaContext): Promise<void> {
        // Get 2fa code
        const code = await context.twofaPromise.code();

        let element: Element = await this.getElement(context.driver);
        await element.inputText(code, this.args);
    }

    toString(): string {
        return `Input 2fa code into field ${this.description}`;
    }
}

export type GetTwofaInstructionsContext = {
    driver: Driver;
}

export class GetTwofaInstructionsAction extends Action<GetTwofaInstructionsContext, string | void> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // args should have 'default' field
        if(!args.hasOwnProperty('default')) {
            throw new Error('InputTwofaAction requires args to have a "default" field');
        }
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('GetTwofaInstructionsAction requires a cssSelector to locate the element');
        }

        super(ActionEnum.GET_TWOFA_INSTRUCTIONS, description, location, args, cssSelector);
    }

    async perform(context: GetTwofaInstructionsContext): Promise<string | void> {
        try {
            let element: Element = await this.getElement(context.driver);
            return await element.textContent(this.args.default);
        } catch (e) {
            if (e instanceof ElementNotFoundError) {
                return;
            }
            throw e;
        }
    }

    toString(): string {
        return `Get 2fa instructions text ${this.description}`;
    }
}

export type GetInvoicesContext = {
    driver: Driver;
}

export class GetInvoicesAction extends Action<GetInvoicesContext, Element[]> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // Check if cssSelector is provided
        if (!cssSelector) {
            throw new Error('GetInvoicesAction requires a cssSelector to locate the element');
        }
        super(ActionEnum.GET_INVOICES, description, location, args, cssSelector);
    }

    async perform(context: GetInvoicesContext): Promise<Element[]> {
        return await context.driver.getElements({
            selector: this.cssSelector,
            info: this.description
        });
    }

    toString(): string {
        return `Get invoices elements`;
    }
}

export type ExtractInvoiceDataContext = {
    driver: Driver;
    element: Element;
}

export class ExtractInvoiceDataAction extends Action<ExtractInvoiceDataContext, Invoice> {
    constructor(description: string, location: string, args: any, cssSelector?: string) {
        // args should have 'css_selector_date' field
        if(!args.hasOwnProperty('css_selector_date')) {
            throw new Error('InputTwofaAction requires args to have a "css_selector_date" field');
        }
        // args should have 'css_selector_amount' field
        if(!args.hasOwnProperty('css_selector_amount')) {
            throw new Error('InputTwofaAction requires args to have a "css_selector_amount" field');
        }
        // args should have 'css_selector_download' field
        if(!args.hasOwnProperty('css_selector_download')) {
            throw new Error('InputTwofaAction requires args to have a "css_selector_download" field');
        }
        // args should have 'date_format' field
        if(!args.hasOwnProperty('date_format')) {
            throw new Error('InputTwofaAction requires args to have a "date_format" field');
        }
        // args should have 'date_locale' field
        if(!args.hasOwnProperty('date_locale')) {
            throw new Error('InputTwofaAction requires args to have a "date_locale" field');
        }

        super(ActionEnum.EXTRACT_INVOICE_DATA, description, location, args, cssSelector);
    }

    async perform(context: ExtractInvoiceDataContext): Promise<Invoice> {
        const link = await context.driver.url();
        const date = await context.element.getAttribute(this.args.css_selector_date, "textContent");
        const timestamp = utils.timestampFromString(date, this.args.date_format, this.args.date_locale || 'en');
        const amount = await context.element.getAttribute(this.args.css_selector_amount, "textContent");
        utils.checkAmountContainsCurrencySymbol(amount);
        const downloadElement = await context.element.getElement(this.args.css_selector_download);

        return {
            id: utils.hash_string(`${date}${amount}`),
            link,
            timestamp,
            amount,
            downloadData: {
                element: downloadElement
            }
        }
    }

    toString(): string {
        return `Extract invoice data`;
    }
}