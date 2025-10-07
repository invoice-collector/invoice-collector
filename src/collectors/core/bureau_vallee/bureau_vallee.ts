import { WebCollector } from '../../webCollector';
import { BureauValleeSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorState, CollectorType, Invoice } from '../../abstractCollector';

export class BureauValleeCollector extends WebCollector {

    static CONFIG = {
        id: "bureau_vallee",
        name: "Bureau Vallee",
        description: "i18n.collectors.bureau_vallee.description",
        version: "4",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BureauValleeCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
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

    async collect(driver: Driver, params: any): Promise<void> {
        // TODO : Implement the rest of the collector
    }

    async download(driver: Driver, invoice: Invoice): Promise<void> {
        // TODO : Implement the downloader
    }
}
