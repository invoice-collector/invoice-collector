import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { WebCollector } from '../../webCollector';
import { UrssafSelectors } from './selectors';
import * as utils from '../../../utils';

export class UrssafCollector extends WebCollector {

    static CONFIG = {
        id: "urssaf",
        name: "URSSAF",
        description: "i18n.collectors.urssaf.description",
        version: "1",
        website: "https://urssaf.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg",
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.urssaf.identifier.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.autoentrepreneur.urssaf.fr/services/espace-personnel/mes-documents/historique-de-mes-declarations"
    }

    constructor() {
        super(UrssafCollector.CONFIG);
    }
    
    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies if displayed
        await driver.leftClick(UrssafSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 1000 });

        // Login
        await driver.inputText(UrssafSelectors.INPUT_USERNAME, params.id);
        await driver.inputText(UrssafSelectors.INPUT_PASSWORD, params.password);
        await driver.leftClick(UrssafSelectors.BUTTON_SUBMIT);

        // Check if format alert exists
        const format_alert = await driver.getElement(UrssafSelectors.CONTAINER_FORMAT_ALERT, { raiseException: false, timeout: 1000 })
        if (format_alert) {
            return await format_alert.textContent("i18n.collectors.all.identifier.error");
        }

        // Check if login alert exists
        const login_alert = await driver.getElement(UrssafSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 1000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Go to invoices
        const data = await driver.goto(this.config.entryUrl, "https://api.urssaf.fr/beae/declaration/v1/declarations")

        // Build return array
        return data.responseBody.map(invoice => {
            const timestamp = utils.timestampFromString(invoice.dateReception, "'le' dd/MM/yyyy 'à' HH:mm", "fr");
            return {
                id: String(invoice.codePeriode),
                timestamp,
                link: this.config.entryUrl,
                amount: `${invoice.montantDu}€`
            };
        });
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        // Compute dropdown value
        const currentYear = new Date().getFullYear();
        const year = Number(`20${invoice.id.substring(0, 2)}`);
        const dropdownValue = `${currentYear - year}: ${year}`;
        await driver.dropdownSelect(UrssafSelectors.DROPDOW_YEAR, dropdownValue);

        // Download invoice
        await driver.leftClick(UrssafSelectors.BUTTON_DOWNLOAD(invoice.id), { navigation: false });

        return {
            ...invoice,
            documents: [
                await this.download_from_file(driver)
            ]
        };
    }
}
