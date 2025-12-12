import { OpenaiSelectors } from './selectors';
import { Driver, Element } from '../../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../../abstractCollector';
import * as utils from '../../../../utils';
import { OpenaiCommonCollector } from '../openai_common/openaiCommon';

export class OpenaiApiCollector extends OpenaiCommonCollector {

    static CONFIG = {
        id: "openai_api",
        name: "OpenAI (API)",
        description: "i18n.collectors.openai_api.description",
        version: "12",
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
        loginUrl: "https://platform.openai.com/login",
        entryUrl: "https://platform.openai.com/settings/organization/billing/history",
        captcha: CollectorCaptcha.NONE,
        autoLogin: {
            localStorageKeys: ['@@auth0spajs@@']
        }
    }

    constructor() {
        super(OpenaiApiCollector.CONFIG);
    }

    async navigate(driver: Driver, params: any): Promise<void> {
        // Wait for billing button
        await driver.getElement(OpenaiSelectors.BUTTON_SETTINGS, { timeout: 5000 });
        // Go to invoices page
        await driver.goto(OpenaiApiCollector.CONFIG.entryUrl);
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
            downloadButton: viewInvoice
        };
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        // Open invoice in new tab
        const newPage = await invoice.downloadButton.middleClick();
        // Download PDF
        await newPage.leftClick(OpenaiSelectors.BUTTON_DOWNLOAD);
        // Return downloaded file
        return [await this.download_from_file(newPage)];
    }
}
