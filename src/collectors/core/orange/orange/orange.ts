import { OrangeSelectors } from './selectors';
import { AbstractDriver } from '../../../../driver/abstractDriver';
import { Element } from '../../../../driver/element';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod, CollectorState } from '../../../../collectors/abstractCollector';
import { AuthenticationError } from '../../../../error';
import { OrangeHelper } from '../helper/orangeHelper';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { TwofaPromise } from '../../../../tasks/collect/twofaPromise';
import { LinearWebCollector } from '../../../linearWebCollector';

export class OrangeCollector extends LinearWebCollector {

    static CONFIG = {
        id: 'orange',
        name: 'Orange (.fr)',
        description: 'i18n.collectors.orange.description',
        version: '33',
        website: 'https://www.orange.fr',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
        type: CollectorType.WEB,
        instructions: 'i18n.collectors.orange.instructions',
        params: {
            id: {
                type: 'string',
                name: 'i18n.collectors.all.email_or_number',
                placeholder: 'i18n.collectors.all.email_or_number.placeholder',
                mandatory: true,
            },
            password: {
                type: 'password',
                name: 'i18n.collectors.all.password',
                placeholder: 'i18n.collectors.all.password.placeholder',
                mandatory: true,
            },
        },
        loginUrl: 'https://login.orange.fr/?return_url=https%3A%2F%2Fespace-client.orange.fr%2Fselectionner-un-contrat%3FreturnUrl%3D%252Ffacture-paiement%252F%257B%257Bcid%257D%257D%252Fhistorique-des-factures%253Fsosh%253D%26verticale%3Dtelco%26marketType%3DRES',
        entryUrl: 'https://espace-client.orange.fr/selectionner-un-contrat?returnUrl=%2Ffacture-paiement%2F%257B%257Bcid%257D%257D%2Fhistorique-des-factures&verticale=telco&marketType=RES',
        captcha: CollectorCaptcha.NONE,
        useProxy: true,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.ACTIVE,
    };

    /**
     * Constructs a new instance of the OrangeCollector class.
     */
    constructor() {
        super(OrangeCollector.CONFIG);
    }

    /**
     * @inheritdoc
     */
    async needLogin(driver: AbstractDriver): Promise<boolean> {
        return await OrangeHelper.needLogin(driver);
    }

    /**
     * @inheritdoc
     */
    async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return await OrangeHelper.login(driver, params, webSocketServer);
    }

    /**
     * @inheritdoc
     */
    async needTwofa(driver: AbstractDriver): Promise<string | void>{
        return await OrangeHelper.needTwofa(driver);
    }

    /**
     * @inheritdoc
     */
    async twofa(driver: AbstractDriver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        return await OrangeHelper.twofa(driver, params, twofa_promise, webSocketServer);
    }

    /**
     * @inheritdoc
     */
    async navigate(driver: AbstractDriver): Promise<void> {
        // Refuse cookies
        await driver.leftClick(OrangeSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 2000});

        // If is pro
        if (driver.url().includes('espaceclientpro.orange.fr')) {
            console.warn('OrangeCollector: Detected pro account');
        }

        // Check if error message is displayed
        const errorMessage = await driver.getElement(OrangeSelectors.CONTAINER_CONTRACT_ERROR, { raiseException: false, timeout: 1000 });
        if(errorMessage) {
            throw new AuthenticationError(await errorMessage.textContent('i18n.collectors.all.contract_access.error'), this);
        }
    }

    /**
     * @inheritdoc
     */
    async forEachPage(driver: AbstractDriver, next: () => Promise<void>): Promise<void> {
        return await OrangeHelper.forEachPage(driver, next);
    }

    /**
     * @inheritdoc
     */
    async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return await OrangeHelper.isEmpty(driver);
    }

    /**
     * @inheritdoc
     */
    async getInvoices(driver: AbstractDriver): Promise<Element[]> {
        return await OrangeHelper.getInvoices(driver);
    }

    /**
     * @inheritdoc
     */
    async data(driver: AbstractDriver, element: Element): Promise<Invoice | null> {
        return await OrangeHelper.data(driver, element);
    }
    
    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        return await OrangeHelper.download(driver, invoice, this);
    }
}
