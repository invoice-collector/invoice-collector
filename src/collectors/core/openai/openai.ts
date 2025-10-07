import { WebCollector } from '../../webCollector';
import { OpenaiSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorType, DownloadedInvoice, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class OpenaiCollector extends WebCollector {

    static CONFIG = {
        id: "openai",
        name: "OpenAI",
        description: "i18n.collectors.openai.description",
        version: "2",
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

    async is_logged_in(driver: Driver): Promise<boolean> {
        const loginOrOups = await driver.getElement(OpenaiSelectors.BUTTON_LOGIN_OR_OUPS, { raiseException: false, timeout: 10000 });
        return loginOrOups == null;
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

    async isTwofa(driver: Driver): Promise<string | void> {
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

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Get invoices
        const data = await driver.goto(OpenaiCollector.CONFIG.entryUrl, "https://api.openai.com/dashboard/billing/invoices?system=api");

        // Build return array
        return data.responseBody.data
            .filter(object => object.object == "invoice")
            .map(invoice => {
                return {
                    id: invoice.number,
                    timestamp: invoice.created * 1000,
                    link: invoice.pdf_url,
                    amount: `$${invoice.amount_due / 100}`
                };
            });
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            documents: [
                await this.download_link(driver, invoice.link)
            ]
        };
    }
}
