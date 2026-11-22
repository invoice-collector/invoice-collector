import { LinearWebCollector } from '../../linearWebCollector';
import { TotalEnergiesEgParticuliersFrSelectors } from './selectors';
import { AbstractDriver } from '../../../driver/abstractDriver';
import { AbstractElement } from '../../../driver/abstractElement';
import { CollectorCaptcha, CollectorState, CollectorType, Invoice, CollectorAuthenticationMethod } from '../../abstractCollector';
import { TwofaPromise } from '../../../tasks/collect/twofaPromise';
import * as utils from '../../../utils';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import { Params } from '../../../model/secret';

export class TotalEnergiesEgParticuliersFrCollector extends LinearWebCollector {

    static CONFIG = {
        id: 'total_energies_eg_particuliers_fr',
        name: 'TotalEnergies (Particuliers)',
        description: 'i18n.collectors.total_energies_eg_particuliers_fr.description',
        version: '1',
        website: 'https://www.totalenergies.fr',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/f/f7/Logo_TotalEnergies.svg',
        type: CollectorType.WEB,
        params: {
            email: {
                type: 'email',
                name: 'i18n.collectors.all.email',
                placeholder: 'i18n.collectors.all.email.placeholder',
                mandatory: true,
            },
            password: {
                type: 'password',
                name: 'i18n.collectors.all.password',
                placeholder: 'i18n.collectors.all.password.placeholder',
                mandatory: true,
            },
        },
        loginUrl: 'https://www.totalenergies.fr/clients/connexion',
        entryUrl: 'https://www.totalenergies.fr/clients/mes-factures/mon-historique-de-factures',
        captcha: CollectorCaptcha.DATADOME,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.DEVELOPMENT,
    };

    /**
     * Constructs a new instance of the TotalEnergiesEgParticuliersFrCollector class.
     */
    constructor() {
        super(TotalEnergiesEgParticuliersFrCollector.CONFIG);
    }

    /**
     * @inheritdoc
     */
    async needLogin(driver: AbstractDriver): Promise<boolean> {
        if (driver.url().includes('connexion')) {
            return true;
        }
        // A Datadome block page keeps the requested url, so check that the logout link is displayed
        return await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.LINK_LOGOUT, { raiseException: false, timeout: 5000 }) === null;
    }

    /**
     * @inheritdoc
     */
    async login(driver: AbstractDriver, params: Params, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Wait for Datadome captcha
        await driver.waitForDatadomeCaptcha();

        // Input email and password
        await driver.inputText(TotalEnergiesEgParticuliersFrSelectors.FIELD_LOGIN, params.email);
        await driver.inputText(TotalEnergiesEgParticuliersFrSelectors.FIELD_PASSWORD, params.password);

        // Refuse cookies, otherwise the popin catches the click on the submit button
        await driver.leftClick(TotalEnergiesEgParticuliersFrSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 3000, navigation: false });

        // Click on submit button
        await driver.leftClick(TotalEnergiesEgParticuliersFrSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const loginAlert = await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
        if (loginAlert) {
            return await loginAlert.textContent('i18n.collectors.all.password.error');
        }
    }

    /**
     * @inheritdoc
     */
    async needTwofa(driver: AbstractDriver): Promise<string | void> {
        // Check if 2FA is required
        const twofaContainer = await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_2FA, { raiseException: false, timeout: 2000 });
        if (twofaContainer) {
            const twofaInstructions = await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
            return twofaInstructions ? await twofaInstructions.textContent('i18n.collectors.all.2fa.instruction') : 'i18n.collectors.all.2fa.instruction';
        }
    }

    /**
     * @inheritdoc
     */
    async twofa(driver: AbstractDriver, params: Params, twofaPromise: TwofaPromise, webSocketServer: WebSocketServer, twofaInstructions: string): Promise<string | void> {
        // Send 2fa code by email, unless already sent at login
        await driver.leftClick(TotalEnergiesEgParticuliersFrSelectors.BUTTON_2FA_SEND, { raiseException: false, timeout: 1000, navigation: false });

        // Check if 2fa code could not be sent
        const twofaSendAlert = await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_2FA_SEND_ALERT, { raiseException: false, timeout: 2000 });
        if (twofaSendAlert) {
            return await twofaSendAlert.textContent('i18n.collectors.all.2fa.error');
        }

        // Wait for 2fa code input
        await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_2FA_INPUT);

        // Wait for 2fa code from UI
        const twofaCode = await Promise.race([twofaPromise.code(), webSocketServer.getTwofa(twofaInstructions, false, false)]);

        // Input 2fa code
        await driver.inputText(TotalEnergiesEgParticuliersFrSelectors.FIELD_2FA_CODE, twofaCode.trim());

        // Click on submit button
        await driver.leftClick(TotalEnergiesEgParticuliersFrSelectors.BUTTON_SUBMIT);

        // Check if 2fa code is incorrect
        const twofaAlert = await driver.getElement(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 2000 });
        if (twofaAlert) {
            return await twofaAlert.textContent('i18n.collectors.all.2fa.error');
        }
    }

    /**
     * @inheritdoc
     */
    async navigate(driver: AbstractDriver): Promise<void> {
        // Go to invoices page, the customer may land on the home page after login
        if (!driver.url().includes(TotalEnergiesEgParticuliersFrCollector.CONFIG.entryUrl)) {
            await driver.goto(TotalEnergiesEgParticuliersFrCollector.CONFIG.entryUrl);
        }
    }

    /**
     * @inheritdoc
     */
    async getInvoices(driver: AbstractDriver): Promise<AbstractElement[]> {
        return await driver.getElements(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_INVOICES);
    }

    /**
     * @inheritdoc
     */
    async data(driver: AbstractDriver, element: AbstractElement): Promise<Invoice | null> {
        const downloadButton = await element.getElement(TotalEnergiesEgParticuliersFrSelectors.BUTTON_INVOICE_DOWNLOAD);
        const link = await element.getAttribute(TotalEnergiesEgParticuliersFrSelectors.BUTTON_INVOICE_DOWNLOAD, 'href');
        const stringNumber = await element.getAttribute(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_INVOICE_NUMBER, 'textContent');
        const stringDate = await element.getAttribute(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_INVOICE_DATE, 'textContent');
        const stringAmount = (await element.getAttribute(TotalEnergiesEgParticuliersFrSelectors.CONTAINER_INVOICE_AMOUNT, 'textContent')).replace(/\s+/g, ' ').trim();

        // Get id from "N° 117003528464"
        const id = stringNumber.replace(/\D/g, '');
        if (!id) {
            throw new Error(`Cannot extract id from ${stringNumber}`);
        }
        const timestamp = utils.timestampFromString(stringDate.trim(), 'dd/MM/yyyy', 'fr');

        // An amount "en votre faveur" (credit note or refund) is negative
        const amount = stringAmount.includes('en votre faveur') ? `-${stringAmount.replace('en votre faveur', '').trim()}` : stringAmount;

        return {
            id: id,
            link: `https://www.totalenergies.fr${link}`,
            timestamp: timestamp,
            amount: amount,
            downloadButton: downloadButton,
        };
    }

    /**
     * @inheritdoc
     */
    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        return [await this.download_link(driver, invoice.link)];
    }
}
