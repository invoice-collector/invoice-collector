import { OrangeSelectors } from './selectors';
import { Driver, Element } from '../../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../../../collectors/abstractCollector';
import * as utils from '../../../../utils';
import { AuthenticationError } from '../../../../error';
import { OrangeCommonCollector } from '../common/orangeCommon';

export class OrangeCollector extends OrangeCommonCollector {

    static CONFIG = {
        id: "orange",
        name: "Orange",
        description: "i18n.collectors.orange.description",
        version: "23",
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
        loadImages: true,
        enableInteractiveLogin: true
    }

    constructor() {
        super(OrangeCollector.CONFIG);
    }

    async navigate(driver: Driver): Promise<void> {
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
             
    async getInvoices(driver: Driver): Promise<Element[]> {
        return await driver.getElements(OrangeSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
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
    
    async download(driver: Driver, element: Element, invoice: Invoice): Promise<string[]> {
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
