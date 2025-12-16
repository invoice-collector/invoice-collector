import { Driver, Element } from '../../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../../abstractCollector';
import { OpenaiCommonCollector } from '../openai_common/openaiCommon';
import { OpenaiSelectors } from './selectors';
import * as utils from '../../../../utils';

export class OpenaiChatgptCollector extends OpenaiCommonCollector {

    static CONFIG = {
        id: "openai_chatgpt",
        name: "OpenAI (ChatGPT Plus)",
        description: "i18n.collectors.openai_chatgpt.description",
        version: "6",
        website: "https://chatgpt.com",
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
        entryUrl: "https://chatgpt.com/#settings/Account",
        captcha: CollectorCaptcha.NONE
    }

    constructor() {
        super(OpenaiChatgptCollector.CONFIG);
    }
    
    async navigate(driver: Driver, params: any): Promise<void> {
        // Wait for billing button
        await driver.getElement(OpenaiSelectors.BUTTON_ACCOUNT, { timeout: 5000 });
        // Click manage payments button
        await driver.leftClick(OpenaiSelectors.BUTTON_MANAGE_PAYMENTS);
        // Wait for invoices search button
        await driver.getElement(OpenaiSelectors.BUTTON_SEARCH_INVOICES);
    }
    
    async forEachPage(driver: Driver, params: any, next: () => void): Promise<void> {
        // Show more invoices while possible
        while((await driver.leftClick(OpenaiSelectors.BUTTON_MORE_INVOICES, { raiseException: false, timeout: 1000, navigation: false, delay: 1000 })) != null) {}
        // Collect invoices
        await next();
    }
    
    async isEmpty(driver: Driver): Promise<boolean>{
        return await driver.getElement(OpenaiSelectors.CONTAINER_NO_ORDERS, { raiseException: false, timeout: 100 }) != null;
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return await driver.getElements(OpenaiSelectors.CONTAINER_INVOICES);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();

        // Compute timestamp
        const dateTime = await element.getAttribute(OpenaiSelectors.CONTAINER_DATE, "textContent");
        let timestamp: number;
        try {
            timestamp = utils.timestampFromString(dateTime, "d MMM yyyy", 'fr');
        } catch (error) {
            timestamp = utils.timestampFromString(dateTime, "MMM d',' yyyy", 'en');
        }

        // Get amount
        const amount = await element.getAttribute(OpenaiSelectors.CONTAINER_AMOUNT, "textContent");

        // Return invoice
        return {
            id: utils.hash_string(`${timestamp}${amount}`),
            timestamp: timestamp,
            link: link,
            amount: amount,
            downloadButton: element
        };
    }
}
