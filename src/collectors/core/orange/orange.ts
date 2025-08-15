import { WebCollector } from '../../webCollector';
import { OrangeSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorState, DownloadedInvoice, Invoice } from '../../abstractCollector';
import * as utils from '../../../utils';

export class OrangeCollector extends WebCollector {

    static CONFIG = {
        id: "orange",
        name: "Orange",
        description: "i18n.collectors.orange.description",
        version: "6",
        website: "https://www.orange.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.email_or_number",
                placeholder: "i18n.collectors.all.email_or_number.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://espace-client.orange.fr/facture-paiement/historique-des-factures",
        useProxy: false, // TODO: Proxy is not compatible with Orange
        loadImages: true
    }

    constructor() {
        super(OrangeCollector.CONFIG);
    }

    async is_logged_in (driver: Driver): Promise<boolean> {
        return !driver.url().includes("login.orange");
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

    async collect(driver: Driver, params: any): Promise<Invoice[] |void> {
        // Check if user is pro
        const isPro = driver.url().includes("espaceclientpro.orange.fr");

        // If is pro
        if (isPro) {
            const contractSelected = driver.url().includes("/contracts/");

            // If contract is not selected, user has probably multiple contracts
            if (!contractSelected) {
                console.warn("Orange Pro collector: multiple contracts detected, please select a contract to continue.");
                return; // Return void to trigger UnfinishedCollectorError
            }

            // If contract is selected, go to bills
            await driver.goto(`${driver.url()}/bills`);

            // Get current year invoices
            return await this.getInvoices(driver);
        }
        else {
            console.warn("User is not pro");
            return; // Return void to trigger UnfinishedCollectorError
        }
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        // Click on element
        await invoice.downloadData?.element.click();

        return {
            ...invoice,
            documents: [
                await this.download_from_file(driver)
            ]
        };
    }

    // PRIVATE METHODS

    private async getInvoices(driver: Driver): Promise<Invoice[]> {
        // Get url before map
        const link = driver.url();

        // Get invoices elements 
        const invoices = await driver.getElements(OrangeSelectors.CONTAINER_INVOICE, { raiseException: false, timeout: 5000 });

        // Build return array
        return await Promise.all(invoices.map(async invoice => {
            const stringDate = await invoice.getAttribute(OrangeSelectors.CONTAINER_DATE, "textContent");
            const amount = await invoice.getAttribute(OrangeSelectors.CONTAINER_AMOUNT, "textContent");
            const timestamp = utils.timestampFromString(stringDate, 'MMMM yyyy', 'fr');
            const date = new Date(timestamp);
            const id = `${date.getFullYear()}-${date.getMonth() + 1}`;

            return {
                id,
                timestamp,
                link: link,
                amount,
                downloadData: {element: invoice}
            };
        }));
    }
}
