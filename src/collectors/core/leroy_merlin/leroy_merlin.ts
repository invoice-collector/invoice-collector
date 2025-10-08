import { WebCollector } from '../../webCollector';
import { LeroyMerlinSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { Invoice, DownloadedInvoice, CollectorCaptcha, CollectorType } from '../../abstractCollector';
import * as utils from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class LeroyMerlinCollector extends WebCollector {

    static CONFIG = {
        id: "leroy_merlin",
        name: "Leroy Merlin",
        description: "i18n.collectors.leroy_merlin.description",
        version: "12",
        website: "https://www.leroymerlin.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Leroy_Merlin_-_logo_%28France%2C_1995-%29.svg",
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
        loginUrl: "https://www.leroymerlin.fr/login.html",
        entryUrl: "https://www.leroymerlin.fr/espace-perso/suivi-de-commande.html?auth-mode=login",
        captcha: CollectorCaptcha.DATADOME
    }

    constructor() {
        super(LeroyMerlinCollector.CONFIG);
    }

    async is_logged_in(driver: Driver): Promise<boolean>{
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();
        // If user is logged in, the URL should be equal to the entry URL
        return driver.url() === this.config.entryUrl;
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, navigation: false });

        // Close shop chooser
        await driver.leftClick(LeroyMerlinSelectors.BUTTON_CLOSE_SHOP_CHOOSER, { raiseException: false, delay: 2000, navigation: false });

        // Input email
        await driver.inputText(LeroyMerlinSelectors.INPUT_EMAIL, params.id, { delay: 1000 });
        await driver.press('Enter');
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

    async isTwofa(driver: Driver): Promise<string | void>{
        // Check if 2FA is required
        const two_factor_auth = await driver.getElement(LeroyMerlinSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (two_factor_auth) {
            return await two_factor_auth.textContent("i18n.collectors.all.2fa.instruction");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Check if 2fa code is 6 digits
        if (twofa_code.length !== 6) {
            return "i18n.collectors.all.2fa.error";
        }
        
        // Input 2fa code slowly to avoid focus out
        await driver.type(twofa_code[0], { delay: 200 });
        await driver.type(twofa_code[1], { delay: 200 });
        await driver.type(twofa_code[2], { delay: 200 });
        await driver.type(twofa_code[3], { delay: 200 });
        await driver.type(twofa_code[4], { delay: 200 });
        await driver.type(twofa_code[5], { delay: 200 });
        
        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(LeroyMerlinSelectors.CONTAINER_2FA_ERROR, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {    
        const data = await driver.goToJson('https://www.leroymerlin.fr/order-followup/backend/v2/orders?customerNumber=null');
        return data.map(order => {
            return {
                id: order.orderPartNumber,
                amount: `${order.price.totalAmount}${order.currencyCode}`,
                timestamp: utils.timestampFromString(order.parentOrder.createdAt, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", 'fr'),
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
        return {
            ...invoice,
            documents: [
                await this.download_from_file(driver)
            ]
        };
    }
}
