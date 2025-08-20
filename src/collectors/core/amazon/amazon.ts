import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { WebCollector } from '../../webCollector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class AmazonCollector extends WebCollector {

    static CONFIG = {
        id: "amazon",
        name: "Amazon FR",
        description: "i18n.collectors.amazon.description",
        version: "15",
        website: "https://www.amazon.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
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
            },
            /*marketplace: {
                type: "enum",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
                enum : {
                    fr: "France",
                    com: "United-States",
                    ca: "Canada",
                    "com.mx": "Mexico",
                    "co.uk": "United-Kingdom",
                    de: "Germany",
                    it: "Italy",
                    es: "Spain",
                    nl: "Netherlands",
                    in: "India",
                    jp: "Japan",
                    "com.tr": "Turkey",
                    sa: "Saudi-Arabia",
                    ae: "United-Arab-Emirates",
                    au: "Australia",
                    sg: "Singapore",
                    "com.br": "Brazil"
                }
            }*/
        },
        entryUrl: "https://www.amazon.fr/your-orders/orders?timeFilter=months-3&ref_=ppx_yo2ov_dt_b_filter_all_m3"
    }

    constructor() {
        super(AmazonCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        const useOtherAccountButton = await driver.getElement(AmazonSelectors.BUTTON_USE_OTHER_ACCOUNT, { raiseException: false, timeout: 2000 });

        // If use other account button no visible
        if (!useOtherAccountButton) {
            // Input email
            await driver.inputText(AmazonSelectors.FIELD_EMAIL, params.id);
            await driver.leftClick(AmazonSelectors.BUTTON_CONTINUE);

            // Check if email is incorrect
            const email_alert = await driver.getElement(AmazonSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
            if (email_alert) {
                return await email_alert.textContent("i18n.collectors.all.email.error");
            }
        }

        // Input password
        await driver.inputText(AmazonSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(AmazonSelectors.CHECKBOX_REMEMBER_ME, { raiseException: false, timeout: 100, navigation: false });
        await driver.leftClick(AmazonSelectors.BUTTON_SUBMIT);

        // Check if password is incorrect
        const password_alert = await driver.getElement(AmazonSelectors.CONTAINER_PASSWORD_ALERT, { raiseException: false, timeout: 2000 });
        if (password_alert) {
            return await password_alert.textContent("i18n.collectors.all.password.error");
        }

        // Check if captcha is required
        const captcha_element = await driver.getElement(AmazonSelectors.CONTAINER_CAPTCHA, { raiseException: false, timeout: 2000 });
        if (captcha_element) {
            return "i18n.collectors.all.password.error";
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        const twofa_instruction = await driver.getElement(AmazonSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (twofa_instruction) {
            return await twofa_instruction.textContent("i18n.collectors.all.2fa.instruction");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Input 2fa code
        await driver.inputText(AmazonSelectors.FIELD_2FA_CODE, twofa_code);
        await driver.leftClick(AmazonSelectors.BUTTON_2FA_DO_NOT_ASK, {raiseException: false, timeout: 100, navigation: false});
        await driver.leftClick(AmazonSelectors.BUTTON_2FA_SUBMIT);

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(AmazonSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        const currentYear = new Date().getFullYear();

        // Collect invoices from last year
        let invoices: Invoice[] = await this.collectYear(driver, currentYear);

        // Add invoices from last year
        invoices = invoices.concat(await this.collectYear(driver, currentYear - 1));

        // Return all collected invoices
        return invoices;
    }

    private async collectYear(driver: Driver, year: number): Promise<Invoice[]> {
        // Go to the orders page for the specified year
        await driver.goto(`https://www.amazon.fr/your-orders/orders?timeFilter=year-${year}`);
    
        // Collect invoices on the current page
        let invoices: Invoice[] = await this.collectInvoicesOnScreen(driver);

        // Get other pages links
        const pages = await driver.getAttributes(AmazonSelectors.BUTTON_PAGE, "href", { raiseException: false, timeout: 100 }) ?? [];

        // For each other page
        for (const page of pages) {
            // Go to the page
            await driver.goto(driver.origin() + page);
            // Collect invoices on the current page
            invoices = invoices.concat(await this.collectInvoicesOnScreen(driver));
        }

        return invoices;
    }

    private async collectInvoicesOnScreen(driver: Driver): Promise<Invoice[]> {
        // Get UI language
        const language = await driver.getAttribute(AmazonSelectors.CONTAINER_LANGUAGE, "textContent");

        // Get all order ids
        const orders = await driver.getElements(AmazonSelectors.CONTAINER_ORDER, { raiseException: false, timeout: 5000 });

        // Return orders
        return Promise.all(
            orders
                .map(async (order) => {
                    const id = await order.getAttribute(AmazonSelectors.CONTAINER_ORDER_ID, "textContent");
                    const amount = await order.getAttribute(AmazonSelectors.CONTAINER_ORDER_AMOUNT, "textContent");
                    const date = await order.getAttribute(AmazonSelectors.CONTAINER_ORDER_DATE, "textContent");
                    const link = driver.origin() + await order.getAttribute(AmazonSelectors.CONTAINER_DOCUMENTS_LINK, "href");
                    const timestamp = timestampFromString(date, 'd MMMM yyyy', language);

                    return {
                        id,
                        timestamp,
                        amount,
                        link
                    };
                }
            )
            //.filter((invoice: any) => invoice.timestamp + 48 * 60 * 60 * 1000 < Date.now())
        );
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        const origin = driver.origin();

        // Go to invoice link
        await driver.goto(invoice.link);

        // Get order link
        const orderLink = origin + await driver.getAttribute(AmazonSelectors.CONTAINER_ORDER_LINK, "href");

        // Get invoices link
        const invoicesLink = await driver.getAttributes(AmazonSelectors.CONTAINER_INVOICES, "href", { raiseException: false, timeout: 100 });

        let documents: string[] = [
            await this.download_webpage(driver, orderLink)
        ];

        for (const invoiceLink of invoicesLink) {
            documents.push(await this.download_link(driver, origin + invoiceLink));
        }

        return {
            ...invoice,
            documents
        };
    }
}
