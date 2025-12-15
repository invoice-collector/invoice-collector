import { Driver, Element } from '../../../../driver/driver';
import { CollectorCaptcha, CollectorState, CollectorType, Invoice } from '../../../abstractCollector';
import { OpenaiCommonCollector } from '../openai_common/openaiCommon';
import { OpenaiSelectors } from './selectors';

export class OpenaiChatgptCollector extends OpenaiCommonCollector {

    static CONFIG = {
        id: "openai_chatgpt",
        name: "OpenAI (ChatGPT Plus)",
        description: "i18n.collectors.openai_chatgpt.description",
        version: "3",
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
        captcha: CollectorCaptcha.NONE,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpenaiChatgptCollector.CONFIG);
    }
    
    async navigate(driver: Driver, params: any): Promise<void> {
        // Wait for billing button
        await driver.getElement(OpenaiSelectors.BUTTON_ACCOUNT, { timeout: 5000 });
        // Click manage payments button
        await driver.leftClick(OpenaiSelectors.BUTTON_MANAGE_PAYMENTS);
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        throw new Error( "Method not implemented.");
    }

    async data(driver: Driver, params: any, element: Element): Promise<null> {
        throw new Error( "Method not implemented.");
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        throw new Error( "Method not implemented.");
    }
}
