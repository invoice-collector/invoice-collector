import { Driver, Element } from '../../../driver/driver';
import { CollectorCaptcha, CollectorType, Invoice } from '../../../collectors/abstractCollector';
import { WebCollector } from '../../../collectors/web2Collector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../../utils';
import { WebSocketServer } from '../../../websocket/webSocketServer';

export class AmazonCollector extends WebCollector {

    static TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;

    static CONFIG = {
        id: "amazon_ws",
        name: "Amazon (.fr) - No credentials",
        description: "i18n.collectors.amazon.description",
        version: "25",
        website: "https://www.amazon.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
        type: CollectorType.WEB,
        params: {},
        loginUrl: "https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcss%2Fyour-account-access%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
        entryUrl: "https://www.amazon.fr/your-orders/orders",
        captcha: CollectorCaptcha.NONE
    }

    constructor() {
        super(AmazonCollector.CONFIG);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        return this.interactiveLogin(driver, params, webSocketServer);
    }

    async forEachPage(driver: Driver, params: any, next: () => void): Promise<void> {
        const currentYear = new Date().getFullYear();

        for (let year = currentYear; year >= currentYear - 1; year--) {
            // Go to the orders page 1 for the specified year
            await driver.goto(`https://www.amazon.fr/your-orders/orders?timeFilter=year-${year}`);
            // Collect invoices
            await next();

            // Get other pages links
            const pages = await driver.getAttributes(AmazonSelectors.BUTTON_PAGE, "href", { raiseException: false, timeout: 100 }) ?? [];

            // For each other page
            for (const page of pages) {
                // Go to the page
                await driver.goto(driver.origin() + page);
                // Collect invoices
                await next();
            }
        }
    }

    async getInvoices(driver: Driver, params: any): Promise<Element[]> {
        // Get order elements
        return await driver.getElements(AmazonSelectors.CONTAINER_ORDER);
    }

    async data(driver: Driver, params: any, element: Element): Promise<Invoice | null>{
        // Get UI language
        const language = await driver.getAttribute(AmazonSelectors.CONTAINER_LANGUAGE, "textContent");
        const date = await element.getAttribute(AmazonSelectors.CONTAINER_ORDER_DATE, "textContent");
        const timestamp = timestampFromString(date, 'd MMMM yyyy', language);

        // Cancel invoice if more recent than 2 days
        if (timestamp > Date.now() - AmazonCollector.TWO_DAYS_IN_MS){
            return null;
        }

        // Get data
        const id = await element.getAttribute(AmazonSelectors.CONTAINER_ORDER_ID, "textContent");
        const amount = await element.getAttribute(AmazonSelectors.CONTAINER_ORDER_AMOUNT, "textContent");
        const link = driver.origin() + await element.getAttribute(AmazonSelectors.CONTAINER_DOCUMENTS_LINK, "href");
        const downloadElement = await element.getElement(AmazonSelectors.CONTAINER_DOCUMENTS_LINK);

        return {
            id,
            timestamp,
            amount,
            link,
            downloadButton: downloadElement
        };
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        let documents: string[] = [];

        // Get origin
        const origin = driver.origin();

        // Open invoice link
        await invoice.downloadButton.middleClick();

        // Get order link
        const orderLink = await driver.getAttribute(AmazonSelectors.CONTAINER_ORDER_LINK, "href");

        // Get invoices link
        const invoicesLink = await driver.getAttributes(AmazonSelectors.CONTAINER_INVOICES, "href", { raiseException: false, timeout: 100 });

        // Download invoices
        for (const invoiceLink of invoicesLink) {
            documents.push(await this.download_link(driver, origin + invoiceLink));
        }

        // Download order
        documents.unshift(await this.download_webpage(driver, origin + orderLink));

        return documents;
    }
}
