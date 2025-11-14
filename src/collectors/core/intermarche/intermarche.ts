import { WebCollector } from '../../web2Collector';
import { IntermarcheSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorState, CollectorType, Invoice } from '../../abstractCollector';
import { UnfinishedCollectorError } from '../../../error';

export class IntermarcheCollector extends WebCollector {

    static CONFIG = {
        id: "intermarche",
        name: "Intermarché",
        description: "i18n.collectors.intermarche.description",
        version: "7",
        website: "https://www.intermarche.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Intermarch%C3%A9_logo_2009_classic.svg",
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
        loginUrl: "https://www.intermarche.com/",
        entryUrl: "https://www.intermarche.com/gestion-de-compte/mes-courses",
        captcha: CollectorCaptcha.DATADOME,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntermarcheCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();

        // Refuse cookies
        await driver.leftClick(IntermarcheSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // Connect with email
        //await driver.leftClick(IntermarcheSelectors.BUTTON_LOGIN);
        //await driver.leftClick(IntermarcheSelectors.BUTTON_CONNECT_WITH_EMAIL);

        // Wait for login form
        await driver.getElement(IntermarcheSelectors.CONTAINER_FORM);

        // Input email and password
        await driver.inputText(IntermarcheSelectors.INPUT_EMAIL, params.id);
        await driver.inputText(IntermarcheSelectors.INPUT_PASSWORD, params.password);

        // Check if email error exists
        const error_email = await driver.getElement(IntermarcheSelectors.CONTAINER_ERROR_EMAIL, { raiseException: false, timeout: 1000 })
        if (error_email) {
            return await error_email.textContent("i18n.collectors.all.email.error");
        }

        // Check if password error exists
        const error_password = await driver.getElement(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, { raiseException: false, timeout: 1000 })
        if (error_password) {
            return await error_password.textContent("i18n.collectors.all.password.error");
        }

        // Check if remember me checkbox exists
        await driver.leftClick(IntermarcheSelectors.CHECKBOX_REMEMBER_ME, { raiseException: false, timeout: 100 })

        // Submit form
        await driver.leftClick(IntermarcheSelectors.BUTTON_SUBMIT);

        // Check if login error exists
        const error_login = await driver.getElement(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, { raiseException: false, timeout: 2000 })
        if (error_login) {
            return await error_login.textContent("i18n.collectors.all.password.error");
        }
    }

    async navigate(driver: Driver, params: any): Promise<void> {
        await driver.leftClick(IntermarcheSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});
    }
     
    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        throw new UnfinishedCollectorError(this);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        throw new UnfinishedCollectorError(this);
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        throw new UnfinishedCollectorError(this);
    }
}
