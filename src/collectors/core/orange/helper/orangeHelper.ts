import { OrangeHelperSelectors } from './selectors';
import { AbstractDriver } from '../../../../driver/abstractDriver';
import { Element } from '../../../../driver/element';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { TwofaPromise } from '../../../../tasks/collect/twofaPromise';
import * as utils from '../../../../utils';
import { Invoice } from '../../../abstractCollector';
import { AuthenticationError } from '../../../../error';
import { WebCollector } from '../../../webCollector';

export class OrangeHelper {

    /**
     * Checks if the user needs to log in.
     * @param driver The driver instance to check the login status.
     * @returns `true` if the user needs to log in, `false` otherwise.
     */
    static async needLogin(driver: AbstractDriver): Promise<boolean> {
        return driver.url().includes('login.orange');
    }

    /**
     * Logs in the user using the provided credentials.
     * @param driver The driver instance to perform the login.
     * @param params The login parameters, including email and password.
     * @param webSocketServer The WebSocket server instance for handling 2FA, if needed.
     * @returns A string containing an error message if login fails, or void if successful.
     */
    static async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
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
                return await email_alert.textContent('i18n.collectors.all.email_or_number.error');
            }

            // If id exists but no account associated
            if (driver.url().includes('mdp/choice/default') || driver.url().includes('promo/custom-login')) {
                return 'i18n.collectors.all.signup.error';
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
                return await password_alert.textContent('i18n.collectors.all.password.error');
            }
        }

        // Skip 2FA proposal if displayed
        await driver.leftClick(OrangeHelperSelectors.BUTTON_SKIP_2FA, { raiseException: false, timeout: 2000 });
    }

    /**
     * Checks if the user needs to perform two-factor authentication (2FA).
     * @param driver The driver instance to check the 2FA status.
     * @returns A string containing the 2FA instruction if 2FA is needed, or void if not.
     */
    static async needTwofa(driver: AbstractDriver): Promise<string | void>{
        if(driver.url().includes('mobile-connect')){
            // Click on "Authenticate with Mobile Connect" button
            await driver.leftClick(OrangeHelperSelectors.BUTTON_AUTHENTICATE_MOBILE_CONNECT);
            // Return instruction text
            return driver.getAttribute(OrangeHelperSelectors.CONTAINER_MOBILE_CONNECT_INSTRUCTION, 'textContent');
        }
        else if(driver.url().includes('orange-et-moi')) {
            // Click on "Send the request" on mobile
            await driver.leftClick(OrangeHelperSelectors.BUTTON_SEND_REQUEST_ON_MOBILE);
            // Return instruction text
            return driver.getAttribute(OrangeHelperSelectors.BUTTON_REQUEST_ON_MOBILE_INSTRUCTION, 'textContent');
        }
    }

    /**
     * Performs two-factor authentication (2FA) using the provided code.
     * @param driver The driver instance to perform the 2FA.
     * @param params The login parameters, including email and password.
     * @param twofa_promise The TwofaPromise instance to obtain the 2FA code.
     * @param webSocketServer The WebSocket server instance for handling 2FA.
     * @returns A string containing an error message if 2FA fails, or void if successful.
     */
    static async twofa(driver: AbstractDriver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Get code from UI
        const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
    }

    /**
     * Iterates through each page of offers and performs the provided action.
     * @param driver The driver instance to navigate through the pages.
     * @param next A callback function to perform actions on each page.
     */
    static async forEachPage(driver: AbstractDriver, next: () => Promise<void>): Promise<void> {
        // If need to select offer
        const needOfferSelection = driver.url().includes('selectionner-un-contrat');
        if (needOfferSelection) {
            // Get offers on page
            const offers = await driver.getElements(OrangeHelperSelectors.CONTAINER_OFFERS);
            
            console.log(`OrangeHelper: Found ${offers.length} offer(s)`);

            // For each offer
            for (const offer of offers) {
                console.log(`OrangeHelper: Processing offer number ${offers.indexOf(offer) + 1}`);
                // Get href from link
                const offerInvoicesLink = driver.origin() + await offer.getAttribute(OrangeHelperSelectors.CONTAINER_OFFERS_LINK, 'href');
                console.log(`OrangeHelper: Offer link is ${offerInvoicesLink}`);
                // Open offer in new page
                await driver.newPage(offerInvoicesLink);
                // Perform collect
                await next();
                // Close extra pages and go back to offers list
                await driver.closeExtraPages();
            }
        } else {
            // If no offer selection, just perform collect
            await next();
        }
    }

    /**
     * Checks whether the page does not contain any invoices/orders/commands.
     * @param driver The driver instance used to perform the check.
     * @returns `true` if there are no invoices/orders/commands, `false` otherwise.
     */
    static async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return await driver.getElement(OrangeHelperSelectors.CONTAINER_NO_INVOICE, { raiseException: false, timeout: 2000 }) !== null;
    }
                
    /**
     * Retrieves the list of invoice elements from the page.
     * @param driver The driver instance used to perform the retrieval.
     * @returns An array of invoice elements.
     */ 
    static async getInvoices(driver: AbstractDriver): Promise<Element[]> {
        return await driver.getElements(OrangeHelperSelectors.CONTAINER_INVOICE);
    }

    /**
     * Retrieves the data for a specific invoice element.
     * @param driver The driver instance used to perform the retrieval.
     * @param element The invoice element from which to extract the data.
     * @returns The extracted invoice data, or `null` if the invoice collection must be canceled.
     */
    static async data(driver: AbstractDriver, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();
        const contractId = link.match(/\/facture-paiement\/(\d+)\//)?.[1];

        // Return invoice
        const pdfElement = await element.getElement(OrangeHelperSelectors.BUTTON_PDF);
        const stringDate = await element.getAttribute(OrangeHelperSelectors.CONTAINER_DATE, 'textContent');
        const amount = await element.getAttribute(OrangeHelperSelectors.CONTAINER_AMOUNT, 'textContent');
        const timestamp = utils.timestampFromString(stringDate, 'dd MMMM yyyy', 'fr');
        const date = new Date(timestamp);
        const id = `${contractId}-${date.getFullYear()}-${date.getMonth() + 1}`;

        return {
            id,
            timestamp,
            link,
            amount,
            downloadButton: pdfElement,
        };
    }

    /**
     * Downloads the files associated with a specific invoice.
     * @param driver The driver instance used to perform the download.
     * @param invoice The invoice for which to download the files.
     * @param collector The web collector instance used for the download.
     * @returns An array of file paths for the downloaded files.
     */
    static async download(driver: AbstractDriver, invoice: Invoice, collector: WebCollector): Promise<string[]> {
        // Click on element
        await invoice.downloadButton.middleClick({ useFallbackMethod: true });

        // Raise error if VPN issue displayed
        const vpnError = await driver.getElement(OrangeHelperSelectors.CONTAINER_VPN_ERROR, { raiseException: false, timeout: 2000 });
        if (vpnError) {
            throw new AuthenticationError('i18n.collectors.all.2fa.not_enabled', collector);
        }

        // Click on download button if displayed
        await driver.leftClick(OrangeHelperSelectors.BUTTON_DOWNLOAD_INVOICE, { raiseException: false, timeout: 100 });

        // Return invoice
        return [ await driver.waitForFileToDownload() ];
    }
}
