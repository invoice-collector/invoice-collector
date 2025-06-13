import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { ScrapperCollector } from '../../scrapperCollector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class AmazonCollector extends ScrapperCollector {

    static CONFIG = {
        name: "Amazon FR",
        description: "i18n.collectors.amazon.description",
        version: "8",
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
                type: "string",
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
        // Input email
        await driver.inputText(AmazonSelectors.FIELD_EMAIL, params.id);
        await driver.leftClick(AmazonSelectors.BUTTON_CONTINUE);

        // Check if email is incorrect
        const email_alert = await driver.getElement(AmazonSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
        if (email_alert) {
            return await email_alert.textContent("i18n.collectors.all.email.error");
        }

        // Input password
        await driver.inputText(AmazonSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(AmazonSelectors.BUTTON_SUBMIT);

        // Check if password is incorrect
        const password_alert = await driver.getElement(AmazonSelectors.CONTAINER_CAPTCHA, { raiseException: false, timeout: 2000 });
        if (password_alert) {
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
        // Get all order ids
        const orders = await driver.getElements(AmazonSelectors.CONTAINER_ORDER, { raiseException: false, timeout: 5000 });

        // Return orders
        return Promise.all(orders.map(async (order) => {
            const id = await order.getAttribute(AmazonSelectors.CONTAINER_ID, "textContent");
            const amount = await order.getAttribute(AmazonSelectors.CONTAINER_AMOUNT, "textContent");
            const date = await order.getAttribute(AmazonSelectors.CONTAINER_DATE, "textContent");
            const link = `https://www.amazon.fr/gp/css/summary/print.html/?ie=UTF8&orderID=${id}`;
            const timestamp = timestampFromString(date, 'd MMMM yyyy', 'fr');

            return {
                id,
                timestamp,
                amount,
                link
            };
        }));
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return await this.download_webpage(driver, invoice);
    }
}
