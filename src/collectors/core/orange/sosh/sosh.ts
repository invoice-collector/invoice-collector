import { TwofaPromise } from '../../../../collect/twofaPromise';
import { CollectorCaptcha, CollectorState, CollectorType, Invoice } from '../../../abstractCollector';
import { OrangeHelper } from '../helper/orangeHelper';
import { WebCollector } from '../../../webCollector';
import { Driver, Element } from '../../../../driver/driver';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { SoshSelectors } from './selectors';

export class SoshCollector extends WebCollector {

    static CONFIG = {
        id: "sosh",
        name: "Sosh",
        description: "i18n.collectors.sosh.description",
        version: "8",
        website: "https://www.sosh.fr/",
        logo: "https://upload.wikimedia.org/wikipedia/fr/7/7d/Sosh_%28logo_bleu%29.svg",
        type: CollectorType.WEB,
        instructions: "i18n.collectors.sosh.instructions",
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
                mandatory: true
            }
        },
        loginUrl: "https://login.orange.fr/?service=sosh&return_url=https%3A%2F%2Fespace-client.orange.fr%2Fselectionner-un-contrat%3FreturnUrl%3D%252Ffacture-paiement%252F%257B%257Bcid%257D%257D%252Fhistorique-des-factures%253Fsosh%253D%26verticale%3Dtelco%26marketType%3DRES%26sosh%3D",
        entryUrl: "https://espace-client.orange.fr/selectionner-un-contrat?verticale=telco&marketType=RES&sosh=&returnUrl=%2Ffacture-paiement%2F%257B%257Bcid%257D%257D%2Fhistorique-des-factures%3Fsosh%3D",
        captcha: CollectorCaptcha.NONE,
        useProxy: true,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoshCollector.CONFIG);
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
        await driver.leftClick(SoshSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 2000});
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
