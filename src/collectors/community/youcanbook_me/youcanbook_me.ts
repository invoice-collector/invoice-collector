import { LinearWebCollector } from '../../linearWebCollector';
import { YoucanbookMeSelectors, MONTHS } from './selectors';
import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice, CollectorAuthenticationMethod } from '../../abstractCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

/**
 * YouCanBookMe keeps no invoice of its own: its "Plan and billing" page hands
 * over to the Stripe customer portal, which is where the billing history lives.
 * The collector therefore logs into YouCanBookMe, follows it to Stripe, and
 * reads the invoices from the portal.
 */
export class YoucanbookMeCollector extends LinearWebCollector {

    static CONFIG = {
        id: "youcanbook_me",
        name: "youcanbook.me",
        description: "i18n.collectors.youcanbook_me.description",
        version: "1",
        website: "https://youcanbook.me",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7378.jpg",
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
        loginUrl: "https://app.youcanbook.me/#/login",
        entryUrl: "https://app.youcanbook.me/#/billing/overview",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL
    }

    constructor() {
        super(YoucanbookMeCollector.CONFIG);
    }

    /**
     * Invoice rows, read in one pass by getInvoices().
     *
     * Downloading leaves the portal for the invoice page, which detaches the
     * handles of the invoices left to process. data() therefore reads this
     * cache rather than the DOM.
     */
    private rows: { link: string, text: string }[] = [];
    private cursor = 0;

    /**
     * Turns a Stripe date label into a timestamp. Stripe renders the portal in
     * the browser locale, and the app serves `en` and `fr`, so both layouts are
     * covered: "18 aout 2026" and "August 18, 2026".
     */
    private parseDate(raw: string): number {
        const cleaned = (raw || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        let day: string, monthLabel: string, year: string;

        const fr = cleaned.match(/(\d{1,2})\s+([a-z]+)\.?\s+(\d{4})/);
        if (fr) {
            [, day, monthLabel, year] = fr;
        }
        else {
            const en = cleaned.match(/([a-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})/);
            if (!en) {
                throw new Error(`Unable to parse the invoice date "${raw}"`);
            }
            [, monthLabel, day, year] = en;
        }

        // Four letters first, "juin" and "juil" share the "jui" prefix
        const month = MONTHS[monthLabel.slice(0, 4)] ?? MONTHS[monthLabel.slice(0, 3)];
        if (month === undefined) {
            throw new Error(`Unknown month "${monthLabel}" in date "${raw}"`);
        }

        return Date.UTC(Number(year), month, Number(day));
    }

    /**
     * The link text runs everything together, as in
     * "18 aout 202640,00 EURPayeeLegacy Pricing". The amount is therefore
     * looked up after the date, otherwise the year sticks to it and is read as
     * part of the amount.
     */
    private parseAmount(raw: string, afterIndex: number): string {
        const rest = (raw || '').slice(afterIndex);
        const match = rest.match(/(\d[\d\s.,]*\s*(?:EUR|USD|GBP|€|\$|£))/i)
            || rest.match(/((?:€|\$|£|EUR|USD|GBP)\s*\d[\d\s.,]*)/i);
        return match ? match[1].trim() : '';
    }

    /**
     * Returns the first element whose text matches, or null.
     *
     * Both apps are single page applications: the element may only appear
     * seconds after the navigation, hence the retry.
     */
    private async findByText(driver: Driver, selector: any, pattern: RegExp): Promise<Element | null> {
        const deadline = Date.now() + Driver.DEFAULT_NAVIGATION_TIMEOUT;
        while (Date.now() < deadline) {
            const elements = await driver.getElements(selector, { raiseException: false, timeout: 5000 });
            for (const element of elements) {
                const text = await element.textContent('');
                if (pattern.test(text.trim())) {
                    return element;
                }
            }
            await utils.delay(2000);
        }
        return null;
    }

    async needLogin(driver: Driver): Promise<boolean> {
        // Hash routed app: the route is readable without touching the DOM
        return driver.url().includes('#/login');
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if (!driver.url().includes('#/login')) {
            await driver.goto(this.config.loginUrl, { navigation: false });
        }

        await driver.inputText(YoucanbookMeSelectors.FIELD_EMAIL, params.email);
        await driver.inputText(YoucanbookMeSelectors.FIELD_PASSWORD, params.password);

        // The submission does not trigger a regular navigation
        await driver.leftClick(YoucanbookMeSelectors.BUTTON_SUBMIT, { navigation: false });

        // Success means the login route has been left
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

        // The button has no stable selector: it is matched on its label, in
        // both locales the app serves.
        const button = await this.findByText(driver, YoucanbookMeSelectors.BUTTON_BILLING, /billing|facturation/i);
        if (button === null) {
            throw new Error(`Billing button not found on ${this.config.entryUrl}`);
        }

        // The Stripe portal opens in the same tab
        await button.leftClick({ navigation: false });

        const deadline = Date.now() + Driver.DEFAULT_NAVIGATION_TIMEOUT;
        while (Date.now() < deadline) {
            await utils.delay(2000);
            if (driver.url().includes('billing.stripe.com')) {
                await utils.delay(3000);
                return;
            }
        }

        throw new Error(`Stripe billing portal not reached, current URL is ${driver.url()}`);
    }

    async isEmpty(driver: Driver): Promise<boolean> {
        return await driver.getElement(YoucanbookMeSelectors.LINK_INVOICE, {
            raiseException: false,
            timeout: 10000
        }) == null;
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        const elements = await driver.getElements(YoucanbookMeSelectors.LINK_INVOICE);

        // Read in one pass, before any download: see `rows`
        this.rows = [];
        this.cursor = 0;
        for (const element of elements) {
            const row = await element.element.evaluate((node: any) => ({
                link: node.getAttribute('href') || '',
                text: (node.textContent || '').trim(),
            }));
            this.rows.push(row);
        }

        return elements;
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        const row = this.rows[this.cursor];
        this.cursor = this.cursor + 1;

        if (!row || !row.link) {
            return null;
        }

        const dateMatch = row.text.match(/\d{1,2}\s+\S+\s+\d{4}|\S+\s+\d{1,2},?\s+\d{4}/);
        if (!dateMatch) {
            return null;
        }

        const date = dateMatch[0];
        const amount = this.parseAmount(row.text, (dateMatch.index || 0) + date.length);

        return {
            id: utils.hash_string(`${date}${amount}`),
            timestamp: this.parseDate(date),
            amount,
            link: row.link,
            downloadButton: element
        };
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        // The page hosted by Stripe triggers the download in JavaScript, there
        // is no PDF URL to follow.
        await driver.goto(invoice.link, { navigation: false });

        const button = await this.findByText(
            driver,
            YoucanbookMeSelectors.BUTTON_DOWNLOAD,
            // "Download receipt" is a neighbouring button: do not take it
            /t[ée]l[ée]charger la facture|download invoice/i
        );
        if (button === null) {
            throw new Error('Download button not found on the invoice page');
        }

        await button.leftClick({ navigation: false });
        return [await this.download_from_file(driver)];
    }
}
