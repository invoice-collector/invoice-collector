import { WebCollector } from '../../../collectors/web2Collector';
import { OrangeSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, DownloadedInvoice, Invoice } from '../../../collectors/abstractCollector';
import * as utils from '../../../utils';
import { AuthenticationError } from '../../../error';
import { WebSocketServer } from '../../../websocket/webSocketServer';

export class OrangeCollector extends WebCollector {

    static CONFIG = {
        id: "orange",
        name: "Orange",
        description: "i18n.collectors.orange.description",
        version: "22",
        website: "https://www.orange.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        type: CollectorType.WEB,
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
        loginUrl: "https://login.orange.fr/?return_url=https%3A%2F%2Fwww.orange.fr%2Fportail",
        entryUrl: "https://espace-client.orange.fr/facture-paiement/historique-des-factures",
        captcha: CollectorCaptcha.NONE,
        useProxy: false, // TODO: Proxy is not compatible with Orange
        loadImages: true
    }

    constructor() {
        super(OrangeCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        return driver.url().includes("login.orange");
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(OrangeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // If login input is displayed
        const emailInput = await driver.getElement(OrangeSelectors.FIELD_EMAIL, { raiseException: false, timeout: 2000 });
        if (emailInput) {
            // Input email
            await emailInput.inputText(params.id);
            await driver.leftClick(OrangeSelectors.BUTTON_CONTINUE);
        
            // Check if email is incorrect
            const email_alert = await driver.getElement(OrangeSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
            if (email_alert) {
                return await email_alert.textContent("i18n.collectors.all.email_or_number.error");
            }

            // If id exists but no account associated
            if (driver.url().includes("mdp/choice/default") || driver.url().includes("promo/custom-login")) {
                return "i18n.collectors.all.signup.error";
            }
        }

        // Select password authentication if multiple options are available
        await driver.leftClick(OrangeSelectors.BUTTON_PASSWORD_OPTION, { raiseException: false, timeout: 2000 });

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
    async navigate(driver: Driver, params: any): Promise<void> {
        // Refuse cookies
        await driver.leftClick(OrangeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 2000});

        // If is pro
        if (driver.url().includes("espaceclientpro.orange.fr")) {
            console.warn('OrangeCollector: Detected pro account');
        }

        // If need to select contract
        const needContractSelection = driver.url().includes("selectionner-un-contrat");
        if (needContractSelection) {
            // Check if error message is displayed
            const errorMessage = await driver.getElement(OrangeSelectors.CONTAINER_CONTRACT_ERROR, { raiseException: false, timeout: 1000 });
            if(errorMessage) {
                throw new AuthenticationError(await errorMessage.textContent("i18n.collectors.all.contract_access.error"), this);
            }
            // Select first contract
            await driver.leftClick(OrangeSelectors.CONTAINER_FIRST_CONTRACT);
        }
    }
             
    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        return await driver.getElements(OrangeSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null> {
        // Get url before map
        const link = driver.url();

        // Return invoice
        const pdfElement = await element.getElement(OrangeSelectors.BUTTON_PDF);
        const stringDate = await element.getAttribute(OrangeSelectors.CONTAINER_DATE, "textContent");
        const amount = await element.getAttribute(OrangeSelectors.CONTAINER_AMOUNT, "textContent");
        const timestamp = utils.timestampFromString(stringDate, "dd MMMM yyyy", 'fr');
        const date = new Date(timestamp);
        const id = `${date.getFullYear()}-${date.getMonth() + 1}`;

        return {
            id,
            timestamp,
            link: link,
            amount,
            downloadButton: pdfElement
        };
    }
    
    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        // Click on element
        await invoice.downloadButton.leftClick();

        try {
            return [ await this.download_from_file(driver) ];
        } catch (e) {
            // Check if VPN issue displayed
            const vpnError = await driver.getElement(OrangeSelectors.CONTAINER_VPN_ERROR, { raiseException: false, timeout: 100 });
            if (vpnError) {
                throw new AuthenticationError("i18n.collectors.orange.vpn.error", this);
            }
            throw e;
        }
    }
}
