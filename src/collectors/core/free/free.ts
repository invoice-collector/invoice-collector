import { WebCollector } from '../../webCollector';
import { FreeSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';

export class FreeCollector extends WebCollector {

    static CONFIG = {
        name: "Free",
        description: "i18n.collectors.free.description",
        version: "4",
        website: "https://www.free.fr",
        logo: "https://www.free.fr/assets/img/freebox/home/cards/logos/free-app-logo.svg",
        params: {
            id: {
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.free.identifier.placeholder",
                mandatory: true
            },
            password: {
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://adsl.free.fr/facture_liste.pl",
        useProxy: false, // TODO: Proxy is not compatible with Free
    }

    constructor() {
        super(FreeCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        await driver.inputText(FreeSelectors.FIELD_USERNAME, params.id);
        await driver.inputText(FreeSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(FreeSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(FreeSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.identifier.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Go to invoices
        await driver.leftClick(FreeSelectors.BUTTON_INVOICES);

        // Get invoices
        const invoices = await driver.getElements(FreeSelectors.CONTAINER_INVOICE, { raiseException: false, timeout: 5000 });

        // Build return array
        return await Promise.all(invoices.map(async invoice => {
            const link = await invoice.getAttribute(FreeSelectors.BUTTON_DOWNLOAD, "href");
            const amount = await invoice.getAttribute(FreeSelectors.CONTAINER_AMOUNT, "textContent");

            let search_params = new URLSearchParams(link);
            const no_facture = search_params.get("no_facture");
            const date_string = search_params.get("mois");
            if (!no_facture) {
                throw new Error(`Field 'no_facture' is missing in the link ${link}`);
            }
            if (!date_string) {
                throw new Error(`Field 'no_facture' is missing in the link ${link}`);
            }

            const year = parseInt(date_string.slice(0, 4));
            const month = parseInt(date_string.slice(4, 6)) - 1; // Months in JavaScript are indexed from 0 to 11
            const timestamp = Date.UTC(year, month);

            return {
                id: no_facture,
                timestamp,
                link,
                amount
            };
        }));
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return await this.download_link(driver, invoice);
    }
}
