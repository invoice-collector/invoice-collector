import { LinearWebCollector } from '../../linearWebCollector';
import { CrispSelectors } from './selectors';
import { AbstractDriver } from '../../../driver/abstractDriver';
import { AbstractElement } from '../../../driver/abstractElement';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod, CollectorState } from '../../abstractCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

export class CrispCollector extends LinearWebCollector {

    static CONFIG = {
        id: "crisp",
        name: "Crisp",
        description: "i18n.collectors.crisp.description",
        version: "1",
        website: "https://crisp.chat",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119879.jpg",
        type: CollectorType.WEB,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://app.crisp.chat/initiate/login/",
        entryUrl: "https://app.crisp.chat/settings/billing/invoices/all/",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.DEVELOPMENT
    }

    /**
     * Constructs a new instance of the CrispCollector class.
     */
    constructor() {
        super(CrispCollector.CONFIG);
    }

    /**
     * Normalizes a Crisp period label into a form `timestampFromString` can parse.
     * @param raw The raw period label string.
     * @returns The normalized period label string.
     */
    private normalizeDate(raw: string): string {
        return utils.trim(raw)
            .replace(/^f[ée]v(?=\s)/i, "févr")
            .replace(/^ao[uû](?=\s)/i, "août");
    }

    /**
     * Extracts the amount from a raw string, handling both suffixed and prefixed currency formats.
     * @param raw The raw string containing the amount with currency.
     * @returns The extracted amount as a string, or the trimmed raw string if no amount is found.
     */
    private parseAmount(raw: string): string {
        const text = raw || '';
        const suffixed = text.match(/(\d[\d\s.,]*\s*(?:EUR|USD|€|\$))/i);
        if (suffixed) {
            return suffixed[1].trim();
        }
        const prefixed = text.match(/((?:€|\$|EUR|USD)\s*\d[\d\s.,]*)/i);
        return prefixed ? prefixed[1].trim() : text.trim();
    }

    /**
     * @inheritdoc
     */
    async login(driver: AbstractDriver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        await driver.inputText(CrispSelectors.FIELD_EMAIL, params.email);
        await driver.inputText(CrispSelectors.FIELD_PASSWORD, params.password);

        // Not blocking if the checkbox disappears from the form
        await driver.leftClick(CrispSelectors.CHECKBOX_REMEMBER, {
            raiseException: false,
            timeout: 3000,
            navigation: false
        });

        await driver.leftClick(CrispSelectors.BUTTON_SUBMIT);
    }

    /**
     * @inheritdoc
     */
    async navigate(driver: AbstractDriver): Promise<void> {
        // The framework already opened `entryUrl`, only the SPA rendering the
        // list is left to wait for
        await driver.getElement(CrispSelectors.CONTAINER_INVOICES_LIST);
    }

    /**
     * @inheritdoc
     */
    async isEmpty(driver: AbstractDriver): Promise<boolean> {
        return await driver.getElement(CrispSelectors.CONTAINER_INVOICE, { raiseException: false, timeout: 5000 }) == null;
    }

    /**
     * @inheritdoc
     */
    async getInvoices(driver: AbstractDriver): Promise<AbstractElement[]> {
        return await driver.getElements(CrispSelectors.CONTAINER_INVOICE);
    }

    /**
     * @inheritdoc
     */
    async data(driver: AbstractDriver, element: AbstractElement): Promise<Invoice | null> {
        const date = await element.getAttribute(CrispSelectors.CONTAINER_INVOICE_DATE, "textContent");

        // Ignore the rows that do not carry a period label
        if (!date) {
            return null;
        }

        const timestamp = utils.timestampFromString(this.normalizeDate(date), "MMM yyyy", 'fr');
        const amount = this.parseAmount(await element.getAttribute(CrispSelectors.CONTAINER_INVOICE_AMOUNT, "textContent"));
        const id = utils.hash_string(`${new Date(timestamp).toISOString()}${amount}`)
        const downloadButton = await element.getElement(CrispSelectors.BUTTON_INVOICE_DOWNLOAD);

        return {
            id: id,
            timestamp: timestamp,
            amount: amount,
            link: driver.url(),
            downloadButton: downloadButton
        };
    }

    /**
     * @inheritdoc
     */
    async download(driver: AbstractDriver, invoice: Invoice): Promise<string[]> {
        // The download button has no href, it triggers the download in
        // JavaScript: the file has to be read back from the download folder.
        await invoice.downloadButton.leftClick();
        return [await this.download_from_file(driver)];
    }
}
