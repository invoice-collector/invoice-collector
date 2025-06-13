import { WebCollector } from '../../webCollector';
import { TotalEnergiesSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { Invoice } from '../../abstractCollector';

export class TotalEnergiesCollector extends WebCollector {

    static CONFIG = {
        name: "i18n.collectors.total_energies.name",
        description: "i18n.collectors.total_energies.description",
        version: "3",
        website: "https://www.totalenergies.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/f/f7/Logo_TotalEnergies.svg",
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
        entryUrl: "https://www.totalenergies.fr/clients/connexion"
    }

    constructor() {
        super(TotalEnergiesCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(TotalEnergiesSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // Input email
        await driver.inputText(TotalEnergiesSelectors.FIELD_EMAIL, params.id);
        await driver.inputText(TotalEnergiesSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(TotalEnergiesSelectors.BUTTON_SUBMIT);
    
        // Check if login alert
        const login_alert = await driver.getElement(TotalEnergiesSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 5000});
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<void> {
        // TODO : Implement the rest of the collector
    }

    async download(driver: Driver, invoice: Invoice): Promise<void> {
        // TODO : Implement the downloader
    }
}
