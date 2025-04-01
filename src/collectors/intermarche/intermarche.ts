import { ScrapperCollector } from '../scrapperCollector';
import { IntermarcheSelectors } from './selectors';
import { Driver } from '../../driver/driver';
import { Invoice } from '../abstractCollector';

export class IntermarcheCollector extends ScrapperCollector {

    static CONFIG = {
        name: "Intermarché",
        description: "i18n.collectors.intermarche.description",
        version: "2",
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
        entryUrl: "https://itmconnect.intermarche.com/auth/realms/customers/protocol/openid-connect/auth?redirect=%252Fgestion-de-compte%252Fmes-courses%253Ftype%253Dcommandes&response_type=code&client_id=desktop&code_challenge_method=S256&code_challenge=EfjMaWEidzZY53KHjcwmCcCuWuB-Ys4csgAbR6bJyd8&redirect_uri=https%3A%2F%2Fwww.intermarche.com%2Fapi%2Fconnexion",
        captcha: "datadome" as "datadome"
    }

    constructor() {
        super(IntermarcheCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();

        // Input email and password
        await driver.press('Tab');
        await driver.type(params.id);
        await driver.press('Tab');
        await driver.type(params.password);
        
        // Check if email error exists
        const error_email = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_EMAIL, false, 1000)
        if (error_email) {
            return await error_email.evaluate(el => el.textContent || "i18n.collectors.all.email.error");
        }

        // Check if password error exists
        const error_password = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, false, 1000)
        if (error_password) {
            return await error_password.evaluate(el => el.textContent || "i18n.collectors.all.password.error");
        }

        // Submit form
        await driver.press('Tab', 3);
        await driver.type('Enter');

        // Check if login error exists
        const error_login = await driver.wait_for_element(IntermarcheSelectors.CONTAINER_ERROR_PASSWORD, false, 2000)
        if (error_login) {
            return await error_login.evaluate(el => el.textContent || "i18n.collectors.all.password.error");
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
