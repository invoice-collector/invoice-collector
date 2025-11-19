import { WebCollector } from '../../web2Collector';
import { FreeMobileSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';
import * as utils from '../../../utils';

export class FreeMobileCollector extends WebCollector {

    static CONFIG = {
        id: "freemobile",
        name: "Free Mobile",
        description: "i18n.collectors.freemobile.description",
        version: "8",
        website: "https://mobile.free.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Free_mobile_2011.svg",
        type: CollectorType.WEB,
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.all.identifier",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        loginUrl: "https://mobile.free.fr/account/v2/login",
        entryUrl: "https://mobile.free.fr/account",
        captcha: CollectorCaptcha.NONE,
        useProxy: false
    }

    constructor() {
        super(FreeMobileCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        return driver.url().includes("login") || driver.url().includes("otp");
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Input id and password
        await driver.inputText(FreeMobileSelectors.FIELD_IDENTIFIER, params.id);
        await driver.inputText(FreeMobileSelectors.FIELD_PASSWORD, params.password);

        // Click on submit button
        await driver.leftClick(FreeMobileSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(FreeMobileSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async needTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        const twofaInstructions = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (twofaInstructions) {
            return await twofaInstructions.textContent("i18n.collectors.all.2fa.instruction");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Check if too much attempts
        const twofa_too_much = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_too_much) {
            return await twofa_too_much.textContent("i18n.collectors.all.2fa.error");
        }

        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Check if 2fa code is 6 digits
        if (twofa_code.length !== 6) {
            return "i18n.collectors.all.2fa.error";
        }

        // Input 2fa code slowly to avoid focus out
        await driver.inputText(FreeMobileSelectors.FIELD_2FA_CODE, twofa_code, { delay: 200 });

        // Click on rember login
        await driver.leftClick(FreeMobileSelectors.LABEL_SAVE_LOGIN, { navigation: false });

        // Click on submit button
        await driver.leftClick(FreeMobileSelectors.BUTTON_2FA_SUBMIT);

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async navigate(driver: Driver, params: any): Promise<void>{
        // Show invoices
        await driver.leftClick(FreeMobileSelectors.BUTTON_SHOW_INVOICES, { navigation: false });

        // Show more invoices while possible
        while((await driver.leftClick(FreeMobileSelectors.BUTTON_MORE_INVOICES, { raiseException: false, timeout: 1000, navigation: false })) != null) {}
    }
    
    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return await driver.getElements(FreeMobileSelectors.CONTAINER_INVOICES);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null>{
        const link = await element.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_LINK, "href");
        const stringDate = await element.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_DATE, "textContent");
        const date = stringDate.replace("Ma dernière facture - ", "").trim();
        const amount = await element.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_AMOUNT, "textContent");

        const id = link.split("/").pop();
        if (!id) {
            throw new Error(`Cannot extract id from ${link}`);
        }
        const timestamp = utils.timestampFromString(date, 'MMMM yyyy', 'fr');

        return {
            id,
            link: `https://mobile.free.fr${link}`,
            timestamp,
            amount
        };
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        return [await this.download_link(driver, invoice.link)];
    }
}
