import { OrangeSelectors } from './selectors';
import { Driver, Element } from '../../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../../../collectors/abstractCollector';
import { AuthenticationError } from '../../../../error';
import { OrangeHelper } from '../helper/orangeHelper';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { TwofaPromise } from '../../../../collect/twofaPromise';
import { WebCollector } from '../../../webCollector';

export class OrangeCollector extends WebCollector {

    static CONFIG = {
        id: "orange",
        name: "Orange (.fr)",
        description: "i18n.collectors.orange.description",
        version: "28",
        website: "https://www.orange.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        type: CollectorType.WEB,
        instructions: "i18n.collectors.orange.instructions",
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
        loginUrl: "https://login.orange.fr/?service=nextecare&return_url=https%3A%2F%2Fespace-client.orange.fr%2Ffacture-paiement%2Fhistorique-des-factures",
        entryUrl: "https://espace-client.orange.fr/facture-paiement/historique-des-factures",
        captcha: CollectorCaptcha.NONE,
        useProxy: false, // TODO: Proxy is not compatible with Orange
        loadImages: true,
        enableInteractiveLogin: true
    }

    constructor() {
        super(OrangeCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        return await OrangeHelper.needLogin(driver);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return await OrangeHelper.login(driver, params, webSocketServer);
    }

    async needTwofa(driver: Driver): Promise<string | void>{
        return await OrangeHelper.needTwofa(driver);
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        return await OrangeHelper.twofa(driver, params, twofa_promise, webSocketServer);
    }

    async navigate(driver: Driver): Promise<void> {
        // Refuse cookies
        await driver.leftClick(OrangeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 2000});

        // If is pro
        if (driver.url().includes("espaceclientpro.orange.fr")) {
            console.warn('OrangeCollector: Detected pro account');
        }

        // Check if error message is displayed
        const errorMessage = await driver.getElement(OrangeSelectors.CONTAINER_CONTRACT_ERROR, { raiseException: false, timeout: 1000 });
        if(errorMessage) {
            throw new AuthenticationError(await errorMessage.textContent("i18n.collectors.all.contract_access.error"), this);
        }
    }

    async forEachPage(driver: Driver, next: () => void): Promise<void> {
        return await OrangeHelper.forEachPage(driver, next);
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        return await OrangeHelper.getInvoices(driver);
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        return await OrangeHelper.data(driver, element);
    }
    
    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        return await OrangeHelper.download(driver, invoice, this);
    }
}
