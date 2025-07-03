import { WebCollector } from '../../webCollector';
import { OrangeSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorState, Invoice } from '../../abstractCollector';

export class OrangeCollector extends WebCollector {

    static CONFIG = {
        id: "orange",
        name: "Orange",
        description: "i18n.collectors.orange.description",
        version: "4",
        website: "https://www.orange.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        params: {
            id: {
                name: "i18n.collectors.all.email_or_number",
                placeholder: "i18n.collectors.all.email_or_number.placeholder",
                mandatory: true
            },
            password: {
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://espace-client.orange.fr/facture-paiement/historique-des-factures",
        useProxy: false, // TODO: Proxy is not compatible with Orange
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrangeCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(OrangeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // Input email
        await driver.inputText(OrangeSelectors.FIELD_EMAIL, params.id);
        await driver.leftClick(OrangeSelectors.BUTTON_CONTINUE);
    
        // Check if email is incorrect
        const email_alert = await driver.getElement(OrangeSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
        if (email_alert) {
            return await email_alert.textContent("i18n.collectors.all.email_or_number.error");
        }
    
        // Input password
        await driver.inputText(OrangeSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(OrangeSelectors.BUTTON_SUBMIT);
    
        // Check if password is incorrect
        const password_alert = await driver.getElement(OrangeSelectors.CONTAINER_PASSWORD_ALERT, { raiseException: false, timeout: 2000 });
        if (password_alert) {
            return await password_alert.textContent("i18n.collectors.all.password.error");
        }

        // Skip 2FA proposal if displayed
        await driver.leftClick(OrangeSelectors.BUTTON_SKIP_2FA, { raiseException: false, timeout: 2000 });
    }

    async collect(driver: Driver, params: any): Promise<void> {
        // TODO : Implement the rest of the collector
    }

    async download(driver: Driver, invoice: Invoice): Promise<void> {
        // TODO : Implement the downloader
    }
}
