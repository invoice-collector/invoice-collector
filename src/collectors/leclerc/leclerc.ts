import { Driver } from '../../driver/driver';
import { Invoice } from '../abstractCollector';
import { ScrapperCollector } from '../scrapperCollector';
import { LeclercSelectors } from './selectors';

export class LeclercCollector extends ScrapperCollector {

    static CONFIG = {
        name: "E.Leclerc",
        description: "i18n.collectors.leclerc.description",
        version: "3",
        website: "https://www.e.leclerc/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg",
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
        entryUrl: "https://www.e.leclerc/auth"
    }

    constructor() {
        super(LeclercCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
            // Accept cookies
            await driver.leftClick(LeclercSelectors.BUTTON_ACCEPT_COOKIES, { raiseException: false, timeout: 5000});

            // Input email
            await driver.inputText(LeclercSelectors.FIELD_EMAIL, params.id);
            await driver.leftClick(LeclercSelectors.BUTTON_LOGIN);
    
            // Check if email is incorrect
            const email_error = await driver.getElement(LeclercSelectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 2000 });
            if (email_error) {
                return await email_error.textContent("i18n.collectors.all.email.error");
            }

            // Check if email is incorrect
            const container_signup = await driver.getElement(LeclercSelectors.CONTAINER_SIGNUP, { raiseException: false, timeout: 2000 });
            if (container_signup) {
                return "i18n.collectors.all.signup.error"
            }
    
            // Input password
            await driver.inputText(LeclercSelectors.FIELD_PASSWORD, params.password);
            await driver.leftClick(LeclercSelectors.BUTTON_LOGIN);
    
            // Check if password is incorrect
            const password_error = await driver.getElement(LeclercSelectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 5000 });
            if (password_error) {
                return await password_error.textContent("i18n.collectors.all.password.error");
            }
    }

    async collect(driver: Driver, params: any): Promise<void> {
        await driver.goto("https://www.e.leclerc/espace-client/commandes/commandes");
        // TODO : Implement the rest of the collector
    }

    async download(driver: Driver, invoice: Invoice): Promise<void> {
        // TODO : Implement the downloader
    }
}
