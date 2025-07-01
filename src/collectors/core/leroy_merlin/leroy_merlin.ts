import { WebCollector } from '../../webCollector';
import { LeroyMerlinSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { Invoice, DownloadedInvoice } from '../../abstractCollector';

export class LeroyMerlinCollector extends WebCollector {

    static CONFIG = {
        id: "leroy_merlin",
        name: "Leroy Merlin",
        description: "i18n.collectors.leroy_merlin.description",
        version: "8",
        website: "https://www.leroymerlin.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg",
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
        entryUrl: "https://www.leroymerlin.fr",
        captcha: "datadome" as "datadome"
    }

    constructor() {
        super(LeroyMerlinCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();

        // Refuse cookies
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, delay: 1000, navigation: false });

        // Close shop chooser
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_CLOSE_SHOP_CHOOSER, { raiseException: false, delay: 1000, navigation: false });

        // Open login page
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_LOGIN_PAGE);

        // Input email
        await driver.inputText(LeroyMerlinSelectors.INPUT_EMAIL, params.id);
        await driver.press('Enter');

        // Check if email is incorrect
        const email_error = await driver.getElement(LeroyMerlinSelectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 2000});
        if (email_error) {
            return await email_error.textContent("i18n.collectors.all.email.error");
        }

        // Input password
        await driver.inputText(LeroyMerlinSelectors.INPUT_PASSWORD, params.password, { delay: 1000 });
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_PASSWORD_CONTINUE);
            
        // Check if password is incorrect
        const password_error = await driver.getElement(LeroyMerlinSelectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 2000});
        if (password_error) {
            return await password_error.textContent("i18n.collectors.all.password.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {    
        const data = await driver.goto('https://www.leroymerlin.fr/espace-perso/suivi-de-commande.html', 'https://www.leroymerlin.fr/order-followup/backend/v2/orders?');

        return data.responseBody.map(order => { 
            return {
                id: order.orderPartNumber,
                amount: order.price.totalAmount,
                timestamp: order.parentOrder.createdAt || null,
                link: `https://www.leroymerlin.fr/espace-perso/suivi-de-commande.html?orderId=${order.orderPartNumber}&storeNumber=${order.storeCode}&customerNumber=${order.customer.id}`
            }
        });
    }

    // Define custom method to download invoice
    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        await driver.goto(invoice.link);
        // If the order is from a third party provider, clicking on the button will ask leroy merlin to request the invoice from the provider.
        // It can take few hours for the invoice to be available.
        // Next time the button will be clicked, the invoice will be effectively downloaded.
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_DOWNLOAD);
        return await this.download_from_file(driver, invoice);
    }
}
