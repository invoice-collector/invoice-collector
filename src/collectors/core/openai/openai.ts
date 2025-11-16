import { WebCollector } from '../../web2Collector';
import { OpenaiSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorType, DownloadedInvoice, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';
import * as utils from '../../../utils';

export class OpenaiCollector extends WebCollector {

    static CONFIG = {
        id: "openai",
        name: "OpenAI",
        description: "i18n.collectors.openai.description",
        version: "4",
        website: "https://openai.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
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
        loginUrl: "https://auth.openai.com/log-in",
        entryUrl: "https://platform.openai.com/settings/organization/billing/history",
        autoLogin: {
            localStorageKeys: ['@@auth0spajs@@']
        }
    }

    constructor() {
        super(OpenaiCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        return await driver.getElement(OpenaiSelectors.BUTTON_LOGIN_OR_OUPS, { raiseException: false, timeout: 10000 }) != null;
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Go to login page
        await driver.goto("https://platform.openai.com/login");

        // Input email
        await driver.inputText(OpenaiSelectors.FIELD_EMAIL, params.email);
        await driver.leftClick(OpenaiSelectors.BUTTON_EMAIL_CONTINUE, { navigation: false });

        // Check if email error is displayed
        const emailError = await driver.getElement(OpenaiSelectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 2000 });
        if (emailError) {
            return await emailError.textContent("i18n.collectors.all.email.error");
        }

        // Input password
        await driver.inputText(OpenaiSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(OpenaiSelectors.BUTTON_PASSWORD_CONTINUE);

        // Check if password error is displayed
        const passwordError = await driver.getElement(OpenaiSelectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 5000 });
        if (passwordError) {
            return await passwordError.textContent("i18n.collectors.all.password.error");
        }
    }

    async needTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA instructions container is displayed
        const twofaInstructions = await driver.getElement(OpenaiSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (twofaInstructions) {
            return await twofaInstructions.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Get code from UI
        const code = await twofa_promise.code();

        // Input code
        await driver.inputText(OpenaiSelectors.FIELD_2FA_CODE, code);
        await driver.leftClick(OpenaiSelectors.BUTTON_2FA_CONTINUE);

        // Check if 2FA error is displayed
        const twofaError = await driver.getElement(OpenaiSelectors.CONTAINER_2FA_ERROR, { raiseException: false, timeout: 2000 });
        if (twofaError) {
            return await twofaError.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async navigate(driver: Driver, params: any): Promise<void> {
        // Wait for organisation to be visible
        await driver.getElement(OpenaiSelectors.CONTAINER_ORGANIZATION, { timeout: 5000 });
        // Go to invoices page
        await driver.goto(OpenaiCollector.CONFIG.entryUrl);
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return await driver.getElement(OpenaiSelectors.CONTAINER_NO_INVOICE, { raiseException: false, timeout: 5000 }) != null;
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return await driver.getElements(OpenaiSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();

        // Compute timestamp
        const dateTime = await element.getAttribute(OpenaiSelectors.CONTAINER_DATE, "textContent");
        let timestamp;
        try {
            timestamp = utils.timestampFromString(dateTime, "d MMM yyyy',' HH':'mm", 'fr');
        } catch (error) {
            timestamp = utils.timestampFromString(dateTime, "MMM d',' yyyy',' hh':'mm a", 'en');
        }

        // Get other data
        const id = await element.getAttribute(OpenaiSelectors.CONTAINER_ID, "textContent");
        const amount = await element.getAttribute(OpenaiSelectors.CONTAINER_AMOUNT, "textContent");
        const viewInvoice = await element.getElement(OpenaiSelectors.BUTTON_VIEW);

        // Return invoice
        return {
            id,
            timestamp,
            link: link,
            amount,
            downloadData: {element: viewInvoice}
        };
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        // Open invoice in new tab
        const newPage = await invoice.downloadData?.element.middleClick();
        // Download PDF
        await newPage.leftClick(OpenaiSelectors.BUTTON_DOWNLOAD);
        // Return downloaded file
        return [await this.download_from_file(driver)];
    }
}
