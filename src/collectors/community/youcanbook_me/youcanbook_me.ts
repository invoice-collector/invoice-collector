import { LinearWebCollector } from '../../linearWebCollector';
import { YoucanbookMeSelectors, DATE_FORMATS } from './selectors';
import { AbstractDriver } from '../../../driver/abstractDriver';
import { AbstractElement } from '../../../driver/abstractElement';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod, CollectorState } from '../../abstractCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

export class YoucanbookMeCollector extends LinearWebCollector {

    static CONFIG = {
        id: "youcanbook_me",
        name: "YouCanBookMe",
        description: "i18n.collectors.youcanbook_me.description",
        version: "1",
        website: "https://youcanbook.me",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7378.jpg",
        type: CollectorType.WEB,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://app.youcanbook.me/#/login",
        entryUrl: "https://app.youcanbook.me/#/billing/overview",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.DEVELOPMENT
    }

    /**
     * Constructs a new instance of the YoucanbookMeCollector class.
     */
    constructor() {
        super(YoucanbookMeCollector.CONFIG);
    }

    /**
     * @inheritdoc
     */
    async needLogin(driver: AbstractDriver): Promise<boolean> {
        // Hash routed app: the route is readable without touching the DOM
        return driver.url().includes('#/login');
    }

    /**
     * @inheritdoc
     */
    async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        await driver.goto(this.config.loginUrl, { navigation: false });

        await driver.inputText(YoucanbookMeSelectors.FIELD_EMAIL, params.email);
        await driver.inputText(YoucanbookMeSelectors.FIELD_PASSWORD, params.password);

        // The submission does not trigger a regular navigation
        await driver.leftClick(YoucanbookMeSelectors.BUTTON_SUBMIT, { navigation: false });

        // Wait for the error message to be displayed, none means success
        const error = await driver.getElement(YoucanbookMeSelectors.CONTAINER_LOGIN_ERROR, {
            raiseException: false,
            timeout: 2000
        });

        if (error !== null) {
            return await error.textContent("i18n.collectors.all.password.error");
        }
    }

    /**
     * @inheritdoc
     */
    async navigate(driver: AbstractDriver): Promise<void> {
        await driver.goto(this.config.entryUrl, { navigation: false });

        // The Stripe portal opens in the same tab
        await driver.leftClick(YoucanbookMeSelectors.BUTTON_BILLING, { navigation: false });

        // Wait for the billing history to be rendered, an account without any
        // invoice is left to isEmpty()
        await driver.getElement(YoucanbookMeSelectors.LINK_INVOICE, {
            raiseException: false,
            timeout: AbstractDriver.DEFAULT_NAVIGATION_TIMEOUT
        });

        if (!driver.url().includes('billing.stripe.com')) {
            throw new Error(`Stripe billing portal not reached, current URL is ${driver.url()}`);
        }
    }

    /**
     * @inheritdoc
     */
    async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return await driver.getElement(YoucanbookMeSelectors.LINK_INVOICE, {
            raiseException: false
        }) == null;
    }

    /**
     * @inheritdoc
     */
    async getInvoices(driver: AbstractDriver): Promise<AbstractElement[]> {
        return await driver.getElements(YoucanbookMeSelectors.LINK_INVOICE);
    }

    /**
     * @inheritdoc
     */
    async data(driver: AbstractDriver, element: AbstractElement): Promise<Invoice | null> {
        // The row itself is the link to the hosted invoice page
        const link = await element.getAttribute(null, 'href');

        const date = await element.getAttribute(YoucanbookMeSelectors.CONTAINER_INVOICE_DATE, "textContent");
        const amount = await element.getAttribute(YoucanbookMeSelectors.CONTAINER_INVOICE_AMOUNT, "textContent");

        return {
            // Stripe follows the browser locale, so 'fr' is tried first and
            // utils.timestampFromString falls back to English on its own
            timestamp: utils.timestampFromString(date, DATE_FORMATS, 'fr'),
            // The hosted invoice URL is permanent and unique, where the date and
            // the amount collide across two invoices of the same day. Its query
            // string carries the browser locale, so only the path is kept.
            id: utils.hash_string(link.split('?')[0]),
            amount,
            link,
            downloadButton: element
        };
    }

    /**
     * @inheritdoc
     */
    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        // Opened in a new tab so that the portal is never left: the handles of
        // the rows still to process would otherwise be detached
        await invoice.downloadButton.middleClick();

        // The page hosted by Stripe triggers the download in JavaScript, there
        // is no PDF URL to follow
        await driver.leftClick(YoucanbookMeSelectors.BUTTON_DOWNLOAD, { navigation: false });

        return [await this.download_from_file(driver)];
    }
}
