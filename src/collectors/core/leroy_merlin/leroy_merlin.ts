import { WebCollector } from '../../web2Collector';
import { LeroyMerlinSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { Invoice, CollectorCaptcha, CollectorType } from '../../abstractCollector';
import * as utils from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';
import { WebSocketServer } from '../../../websocket/webSocketServer';

export class LeroyMerlinCollector extends WebCollector {

    static CONFIG = {
        id: "leroy_merlin",
        name: "Leroy Merlin",
        description: "i18n.collectors.leroy_merlin.description",
        version: "16",
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

    async needLogin(driver: Driver): Promise<boolean>{
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();
        // If login is needed, the url contains /login.html
        return driver.url().includes(this.config.loginUrl);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
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

    async needTwofa(driver: Driver): Promise<string | void>{
        // Check if 2FA is required
        const two_factor_auth = await driver.getElement(LeroyMerlinSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (two_factor_auth) {
            return await two_factor_auth.textContent("i18n.collectors.all.2fa.instruction");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);

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

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return await driver.getElements(LeroyMerlinSelectors.CONTAINER_ORDER);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();

        // Get timestamp
        const date = await element.getAttribute(LeroyMerlinSelectors.CONTAINER_ORDER_DATE, "textContent");
        const timestamp = utils.timestampFromString(date, "dd MMMM yyyy", 'fr');

        // Get data
        const id = await element.getAttribute(LeroyMerlinSelectors.CONTAINER_ORDER_ID, "textContent");
        const amount = await element.getAttribute(LeroyMerlinSelectors.CONTAINER_ORDER_AMOUNT, "textContent");
        const detailsButton = await element.getElement(LeroyMerlinSelectors.BUTTON_ORDER_DETAILS);

        // Return invoice
        return {
            id: id.replace('N°', ''),
            timestamp,
            link: link,
            amount,
            downloadData: {element: detailsButton}
        };
    }

    // Define custom method to download invoice
    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        // Open details in a new page
        const newPage = await invoice.downloadData?.element.middleClick();
        // If the order is from a third party provider, clicking on the button will ask leroy merlin to request the invoice from the provider.
        // It can take few hours for the invoice to be available.
        // Next time the button will be clicked, the invoice will be effectively downloaded.
        await newPage.leftClick(LeroyMerlinSelectors.BUTTON_DOWNLOAD);
        // Return downloaded file
        return [await this.download_from_file(driver)];
    }
}
