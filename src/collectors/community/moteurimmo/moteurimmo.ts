import { LinearWebCollector } from '../../linearWebCollector';
import { MoteurimmoSelectors } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod } from '../../abstractCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

/**
 * Payments are listed in a table, each row carrying a direct PDF link. The
 * download is therefore a click on that link, which carries the `download`
 * attribute: nothing navigates, the handles of the rows left to process stay
 * valid, and the pagination can carry on.
 */
export class MoteurimmoCollector extends LinearWebCollector {

    static CONFIG = {
        id: "moteurimmo",
        name: "MoteurImmo",
        description: "i18n.collectors.moteurimmo.description",
        version: "1",
        website: "https://moteurimmo.fr",
        logo: "https://moteurimmo.fr/images/logo/brand-colored.png",
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
        loginUrl: "https://moteurimmo.fr/connexion",
        entryUrl: "https://moteurimmo.fr/mon-compte/paiements",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL
    }

    constructor() {
        super(MoteurimmoCollector.CONFIG);
    }

    static MAX_PAGES = 20;

    /** Returns the first element whose text matches, or null. */
    private async findByText(driver: Driver, selector: any, pattern: RegExp): Promise<Element | null> {
        const elements = await driver.getElements(selector, { raiseException: false, timeout: 5000 });
        for (const element of elements) {
            const text = await element.textContent('');
            if (pattern.test(text.trim())) {
                return element;
            }
        }
        return null;
    }

    async needLogin(driver: Driver): Promise<boolean> {
        // The payments page redirects to /connexion without a session, so the
        // state is readable from the URL without touching the DOM.
        return driver.url().includes('/connexion');
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if (!driver.url().includes('/connexion')) {
            await driver.goto(this.config.loginUrl, { navigation: false });
        }

        await driver.inputText(MoteurimmoSelectors.FIELD_EMAIL, params.email);
        await driver.inputText(MoteurimmoSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(MoteurimmoSelectors.BUTTON_SUBMIT, { navigation: false });

        // Success means the login page has been left
        const deadline = Date.now() + Driver.DEFAULT_NAVIGATION_TIMEOUT;
        while (Date.now() < deadline) {
            await utils.delay(2000);
            if (!await this.needLogin(driver)) {
                return;
            }
        }

        return "i18n.collectors.all.password.error";
    }

    async navigate(driver: Driver): Promise<void> {
        await driver.goto(this.config.entryUrl, { navigation: false });
        await driver.getElement(MoteurimmoSelectors.CONTAINER_INVOICE, { timeout: 20000 });
    }

    /**
     * Walks the pages while the first link of the page keeps changing.
     *
     * The next page button is still present on the last page, so the stop
     * condition is the absence of change rather than the state of the button.
     * The cap covers the case of a page that would keep changing.
     */
    async forEachPage(driver: Driver, next: () => Promise<void>): Promise<void> {
        const seen = new Set<string>();

        for (let page = 0; page < MoteurimmoCollector.MAX_PAGES; page++) {
            const first = await driver.getAttribute(MoteurimmoSelectors.LINK_INVOICE, 'href', {
                raiseException: false,
                timeout: 5000
            });
            if (!first || seen.has(first)) {
                return;
            }
            seen.add(first);

            await next();

            const button = await this.findByText(driver, MoteurimmoSelectors.BUTTON_PAGE, /page suivante|next/i);
            if (button === null) {
                return;
            }
            await button.leftClick({ navigation: false });
            await utils.delay(3000);
        }

        console.warn(`Stopped after ${MoteurimmoCollector.MAX_PAGES} pages`);
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return await driver.getElement(MoteurimmoSelectors.LINK_INVOICE, {
            raiseException: false,
            timeout: 5000
        }) == null;
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        return await driver.getElements(MoteurimmoSelectors.CONTAINER_INVOICE);
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        // A payment row does not always carry an invoice
        const downloadButton = await element.getElement(MoteurimmoSelectors.LINK_INVOICE, { raiseException: false });
        if (downloadButton === null) {
            return null;
        }

        const link = await element.getAttribute(MoteurimmoSelectors.LINK_INVOICE, "href");
        const date = await element.getAttribute(MoteurimmoSelectors.CELL_DATE, "textContent");
        const amount = await element.getAttribute(MoteurimmoSelectors.CELL_AMOUNT, "textContent");

        // "03/08/2026 a 13:11": the time adds nothing and complicates the format
        const day = (date || '').match(/\d{2}\/\d{2}\/\d{4}/);
        if (!day) {
            throw new Error(`Unable to parse the payment date "${date}"`);
        }

        // The file name carries a unique and stable id, for instance
        // invoice-MI-STRIPE-20260812-50659.pdf. Note that the date it contains
        // is not the payment date, which is why the table cell is used.
        const filename = link.split('/').pop() || '';

        return {
            id: filename.replace(/\.pdf$/i, ''),
            timestamp: utils.timestampFromString(day[0], "dd/MM/yyyy", 'fr'),
            amount: (amount || '').trim(),
            link,
            downloadButton
        };
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        // The link carries the `download` attribute: the click downloads
        // without navigating, which preserves the handles of the next rows.
        await invoice.downloadButton.leftClick({ navigation: false });
        return [await this.download_from_file(driver)];
    }
}
