import { OrangeHelperSelectors } from './selectors';
import { Driver, Element, } from '../../../../driver/driver';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { TwofaPromise } from '../../../../collect/twofaPromise';
import * as utils from '../../../../utils';
import { Invoice } from '../../../abstractCollector';
import { AuthenticationError } from '../../../../error';
import { WebCollector } from '../../../webCollector';

export class OrangeHelper {

    static async needLogin(driver: Driver): Promise<boolean> {
        return driver.url().includes("login.orange");
    }

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(OrangeHelperSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // If login input is displayed
        const emailInput = await driver.getElement(OrangeHelperSelectors.FIELD_EMAIL, { raiseException: false, timeout: 2000 });
        if (emailInput) {
            // Input email
            await emailInput.inputText(params.id);
            await driver.leftClick(OrangeHelperSelectors.BUTTON_CONTINUE);
        
            // Check if email is incorrect
            const email_alert = await driver.getElement(OrangeHelperSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
            if (email_alert) {
                return await email_alert.textContent("i18n.collectors.all.email_or_number.error");
            }

            // If id exists but no account associated
            if (driver.url().includes("mdp/choice/default") || driver.url().includes("promo/custom-login")) {
                return "i18n.collectors.all.signup.error";
            }
        }

        // Select password authentication if multiple options are available
        await driver.leftClick(OrangeHelperSelectors.BUTTON_PASSWORD_OPTION, { raiseException: false, timeout: 2000 });

        // If password input is displayed
        const passwordInput = await driver.getElement(OrangeHelperSelectors.FIELD_PASSWORD, { raiseException: false, timeout: 1000 });
        if(passwordInput) {
            // Input password
            await passwordInput.inputText(params.password);
            await driver.leftClick(OrangeHelperSelectors.BUTTON_SUBMIT);
        
            // Check if password is incorrect
            const password_alert = await driver.getElement(OrangeHelperSelectors.CONTAINER_PASSWORD_ALERT, { raiseException: false, timeout: 2000 });
            if (password_alert) {
                return await password_alert.textContent("i18n.collectors.all.password.error");
            }
        }

        // Skip 2FA proposal if displayed
        await driver.leftClick(OrangeHelperSelectors.BUTTON_SKIP_2FA, { raiseException: false, timeout: 2000 });
    }

    static async needTwofa(driver: Driver): Promise<string | void>{
        if(driver.url().includes("mobile-connect")){
            // Click on "Authenticate with Mobile Connect" button
            await driver.leftClick(OrangeHelperSelectors.BUTTON_AUTHENTICATE_MOBILE_CONNECT);
            // Return instruction text
            return driver.getAttribute(OrangeHelperSelectors.CONTAINER_MOBILE_CONNECT_INSTRUCTION, "textContent");
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Get code from UI
        const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
    }

    static async forEachPage(driver: Driver, isOrange: boolean, next: () => void): Promise<void> {
        // Get offers on page
        const offers = isOrange ?
            await driver.getElements(OrangeHelperSelectors.CONTAINER_OFFERS_ORANGE) :
            await driver.getElements(OrangeHelperSelectors.CONTAINER_OFFERS_SOSH);
        
        console.log(`OrangeHelper: Found ${offers.length} offer(s)`);

        // For each offer
        for (const offer of offers) {
            console.log(`OrangeHelper: Processing offer number ${offers.indexOf(offer) + 1}`);
            // Open offer in new page
            await offer.middleClick();
            // Perform collect
            await next();
            // Close extra pages and go back to offers list
            await driver.closeExtraPages();
        }
    }
                 
    static async getInvoices(driver: Driver): Promise<Element[]> {
        return await driver.getElements(OrangeHelperSelectors.CONTAINER_INVOICE);
    }

    static async data(driver: Driver, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();
        const contractId = link.match(/\/facture-paiement\/(\d+)\//)?.[1];
        console.log(`OrangeHelper: Extracted contract id ${contractId} from url`);

        // Return invoice
        const pdfElement = await element.getElement(OrangeHelperSelectors.BUTTON_PDF);
        const stringDate = await element.getAttribute(OrangeHelperSelectors.CONTAINER_DATE, "textContent");
        const amount = await element.getAttribute(OrangeHelperSelectors.CONTAINER_AMOUNT, "textContent");
        const timestamp = utils.timestampFromString(stringDate, "dd MMMM yyyy", 'fr');
        const date = new Date(timestamp);
        const id = `${contractId}-${date.getFullYear()}-${date.getMonth() + 1}`;

        return {
            id,
            timestamp,
            link: link,
            amount,
            downloadButton: pdfElement
        };
    }

    static async download(driver: Driver, invoice: Invoice, collector: WebCollector): Promise<string[]> {
        // Click on element
        await invoice.downloadButton.leftClick({ navigation: false });

        // Raise error if VPN issue displayed
        const vpnError = await driver.getElement(OrangeHelperSelectors.CONTAINER_VPN_ERROR, { raiseException: false, timeout: 2000 });
        if (vpnError) {
            throw new AuthenticationError("i18n.collectors.all.2fa.not_enabled", collector);
        }

        // Return invoice
        return [ await driver.waitForFileToDownload() ];
    }
}
