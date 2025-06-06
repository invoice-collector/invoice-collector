import { ScrapperCollector } from '../scrapperCollector';
import { IntermarcheSelectors } from './selectors';
import { Driver } from '../../driver/driver';
import { Invoice } from '../abstractCollector';

export class IntermarcheCollector extends ScrapperCollector {

    static CONFIG = {
        name: "Intermarché",
        description: "i18n.collectors.intermarche.description",
        version: "4",
        website: "https://www.intermarche.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Intermarch%C3%A9_logo_2009_classic.svg",
        params: {
            id: {
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://www.intermarche.com/",
        captcha: "datadome" as "datadome"
    }

    constructor() {
        super(IntermarcheCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();

        // Refuse cookies
        await driver.left_click(IntermarcheSelectors.BUTTON_REFUSE_COOKIES, { raise_exception: false, timeout: 5000});

        // Connect with email
        await driver.left_click(IntermarcheSelectors.BUTTON_LOGIN);
        await driver.left_click(IntermarcheSelectors.BUTTON_CONNECT_WITH_EMAIL);

        // Wait for login form
        await driver.wait_for_element(IntermarcheSelectors.CONTAINER_FORM);

        // Input email and password
        await driver.press('Tab');
        await driver.type(params.id);
        await driver.press('Tab');
        await driver.type(params.password);
        
        // Check if email error exists
        const error_email = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_EMAIL, false, 1000)
        if (error_email) {
            return await error_email.textContent("i18n.collectors.all.email.error");
        }

        // Check if password error exists
        const error_password = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, false, 1000)
        if (error_password) {
            return await error_password.textContent("i18n.collectors.all.password.error");
        }

        // Submit form
        await driver.press('Tab', 3);
        await driver.press('Enter');

        // Check if login error exists
        const error_login = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, false, 2000)
        if (error_login) {
            return await error_login.textContent("i18n.collectors.all.password.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<void> {
        await driver.left_click(IntermarcheSelectors.BUTTON_REFUSE_COOKIES, { raise_exception: false, timeout: 5000});
        // TODO : Implement the rest of the collector
    }

    async download(driver: Driver, invoice: Invoice): Promise<void> {
        // TODO : Implement the downloader
    }
}
