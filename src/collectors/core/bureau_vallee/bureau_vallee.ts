import { WebCollector } from '../../webCollector';
import { BureauValleeSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../abstractCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

export class BureauValleeCollector extends WebCollector {

    static CONFIG = {
        id: "bureau_vallee",
        name: "Bureau Vallée",
        description: "i18n.collectors.bureau_vallee.description",
        version: "11",
        website: "https://www.bureau-vallee.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Logo-bureau-vallee-2021.png/320px-Logo-bureau-vallee-2021.png",
        type: CollectorType.WEB,
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        loginUrl: "https://www.bureau-vallee.fr/customer/account/login/",
        entryUrl: "https://www.bureau-vallee.fr/invoice/invoice/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: false
    }

    constructor() {
        super(BureauValleeCollector.CONFIG);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(BureauValleeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // Input email
        await driver.inputText(BureauValleeSelectors.FIELD_EMAIL, params.id);
        await driver.leftClick(BureauValleeSelectors.BUTTON_CONTINUE);
    
        // Check if email is incorrect
        const email_alert = await driver.getElement(BureauValleeSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
        if (email_alert) {
            return await email_alert.textContent("i18n.collectors.all.email_or_number.error");
        }
    
        // Check if signup form is displayed
        const signup_form = await driver.getElement(BureauValleeSelectors.CONTAINER_SIGNUP_FORM, { raiseException: false, timeout: 2000 });
        if (signup_form) {
            return "i18n.collectors.all.signup.error";
        }
    
        // Input password
        await driver.inputText(BureauValleeSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(BureauValleeSelectors.BUTTON_SUBMIT);
    
        // Check if password is incorrect
        const password_alert = await driver.getElement(BureauValleeSelectors.CONTAINER_PASSWORD_ALERT, { raiseException: false, timeout: 2000 });
        if (password_alert) {
            return await password_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async navigate(driver: Driver): Promise<void> {
        // Wait for profile container
        await driver.getElement(BureauValleeSelectors.CONTAINER_PROFIL)
        // Go to invoices page
        await driver.goto(this.config.entryUrl);
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return await driver.getElement(BureauValleeSelectors.CONTAINER_NO_INVOICE, { raiseException: false, timeout: 5000 }) !== null;
    }
 
    async getInvoices(driver: Driver): Promise<Element[]> {
        return await driver.getElements(BureauValleeSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        // Get data
        const date = await element.getAttribute(BureauValleeSelectors.CONTAINER_INVOICE_DATE, "textContent");
        const timestamp = utils.timestampFromString(date, "dd'/'MM'/'yyyy", 'fr');
        const amount = await element.getAttribute(BureauValleeSelectors.CONTAINER_INVOICE_AMOUNT, "textContent");
        const downloadElement = await element.getElement(BureauValleeSelectors.BUTTON_INVOICE_DOWNLOAD);
        const link = await element.getAttribute(BureauValleeSelectors.BUTTON_INVOICE_DOWNLOAD, "href");

        return {
            id: utils.hash_string(`${date}${amount}`),
            timestamp,
            amount,
            link,
            downloadButton: downloadElement
        };
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        // Click on element
        await invoice.downloadButton.leftClick();
        // Wait for the invoice to be downloaded
        return [await this.download_from_file(driver)];
    }
}
