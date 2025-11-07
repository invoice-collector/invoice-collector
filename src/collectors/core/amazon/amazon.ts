import { Driver, Element } from '../../../driver/driver';
import { CollectorType, Invoice } from '../../../collectors/abstractCollector';
import { WebCollector } from '../../../collectors/web2Collector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class AmazonCollector extends WebCollector {

    static TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;

    static CONFIG = {
        id: "amazon",
        name: "Amazon (.fr)",
        description: "i18n.collectors.amazon.description",
        version: "21",
        website: "https://www.amazon.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
        type: CollectorType.WEB,
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
        loginUrl: "https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcss%2Fyour-account-access%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
        entryUrl: "https://www.amazon.fr/your-orders/orders"
    }

    constructor() {
        super(AmazonCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        // Select loggedin account if displayed
        await driver.leftClick(AmazonSelectors.CONTAINER_LOGGEDIN_ACCOUNT, { raiseException: false, timeout: 1000, delay: 2000 });
        // If user is logged in, the URL should be equal to the entry URL
        return driver.url() !== this.config.entryUrl;
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        const fieldPassword = await driver.getElement(AmazonSelectors.FIELD_PASSWORD, { raiseException: false, timeout: 2000 });

        // If password field is not visible
        if (!fieldPassword) {
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

    async needTwofa(driver: Driver): Promise<string | void> {
        // Select default 2FA method if displayed
        await driver.leftClick(AmazonSelectors.BUTTON_2FA_METHOD, { raiseException: false, timeout: 1000 });

        // Check if 2FA is required
        const twofa_instruction = await driver.getElement(AmazonSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 1000 });
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

    async navigate(driver: Driver, params: any): Promise<void>{
        // Wait for UI language element
        await driver.getElement(AmazonSelectors.CONTAINER_LANGUAGE);
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
        return await driver.getElements(AmazonSelectors.CONTAINER_ORDER, { raiseException: false, timeout: 5000 });
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
            downloadData:{element: downloadElement}
        };
    }

    async download(driver: Driver, params: any, element: Element, invoice: Invoice): Promise<string[]> {
        let documents: string[] = [];

        // Get origin
        const origin = driver.origin();

        // Open invoice link
        const newPage: Driver = await invoice.downloadData?.element.middleClick();

        // Get order link
        const orderLink = await newPage.getAttribute(AmazonSelectors.CONTAINER_ORDER_LINK, "href");

        // Get invoices link
        const invoicesLink = await newPage.getAttributes(AmazonSelectors.CONTAINER_INVOICES, "href", { raiseException: false, timeout: 100 });

        // Download invoices
        for (const invoiceLink of invoicesLink) {
            documents.push(await this.download_link(newPage, origin + invoiceLink));
        }

        // Download order
        documents.unshift(await this.download_webpage(newPage, origin + orderLink));

        return documents;
    }
}
