import { LinearWebCollector } from '../../linearWebCollector';
import { CrispSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod } from '../../abstractCollector';
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
        // The "/all/" suffix lists the whole history. Without it the page only
        // shows the most recent invoices.
        entryUrl: "https://app.crisp.chat/settings/billing/invoices/all/",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL
    }

    constructor() {
        super(CrispCollector.CONFIG);
    }

    /**
     * Rewrites the month of a Crisp period label ("Aoû 2026") into a form
     * `timestampFromString` can parse. Crisp shortens two French month names
     * down to three letters, "Fév" and "Aoû", where date-fns expects "févr."
     * and "août". Every other label it renders is already a valid date-fns
     * abbreviation, in French as well as in English.
     */
    private normalizeDate(raw: string): string {
        return utils.trim(raw)
            .replace(/^f[ée]v(?=\s)/i, "févr")
            .replace(/^ao[uû](?=\s)/i, "août");
    }

    /**
     * Extracts "141.40 EUR" from "Total : 141.40 EUR".
     * Crisp suffixes the currency, the prefixed form is handled as a fallback.
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

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
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

    async navigate(driver: Driver): Promise<void> {
        // The framework already opened `entryUrl`, only the SPA rendering the
        // list is left to wait for
        await driver.getElement(CrispSelectors.CONTAINER_INVOICES_LIST);
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return await driver.getElement(CrispSelectors.CONTAINER_INVOICE, { raiseException: false, timeout: 5000 }) == null;
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        return await driver.getElements(CrispSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        const date = await element.getAttribute(CrispSelectors.CONTAINER_INVOICE_DATE, "textContent");

        // Ignore the rows that do not carry a period label
        if (!date) {
            return null;
        }

        const amount = this.parseAmount(await element.getAttribute(CrispSelectors.CONTAINER_INVOICE_AMOUNT, "textContent"));
        const downloadButton = await element.getElement(CrispSelectors.BUTTON_INVOICE_DOWNLOAD);

        return {
            id: utils.hash_string(`${date.trim()}${amount}`),
            // Crisp only exposes the month and the year, so the timestamp
            // lands on the first day of the month
            timestamp: utils.timestampFromString(this.normalizeDate(date), "MMM yyyy", 'fr'),
            amount,
            // The download is JavaScript driven, so there is no direct link.
            // The invoices page is exposed instead, like `openai_api` does.
            link: driver.url(),
            downloadButton
        };
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        // The download button has no href, it triggers the download in
        // JavaScript: the file has to be read back from the download folder.
        await invoice.downloadButton.leftClick();
        return [await this.download_from_file(driver)];
    }
}
