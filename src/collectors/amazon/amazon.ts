import { Driver } from '../../driver/driver';
import { DownloadedInvoice, Invoice } from '../abstractCollector';
import { ScrapperCollector } from '../scrapperCollector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../utils';
import { TwofaPromise } from '../../collect/twofaPromise';

export class AmazonCollector extends ScrapperCollector {

    static CONFIG = {
        name: "Amazon FR",
        description: "i18n.collectors.amazon.description",
        version: "5",
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
        entryUrl: "https://www.amazon.fr/gp/css/order-history"
    }

    constructor() {
        super(AmazonCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Input email
        await driver.input_text(AmazonSelectors.FIELD_EMAIL, params.id);
        await driver.left_click(AmazonSelectors.BUTTON_CONTINUE);

        // Check if email is incorrect
        const email_alert = await driver.wait_for_element(AmazonSelectors.CONTAINER_LOGIN_ALERT, false, 2000);
        if (email_alert) {
            return await email_alert.evaluate(e => e.textContent) || "i18n.collectors.all.email.error";
        }

        // Input password
        await driver.input_text(AmazonSelectors.FIELD_PASSWORD, params.password);
        await driver.left_click(AmazonSelectors.BUTTON_SUBMIT);

        // Check if password is incorrect
        const password_alert = await driver.wait_for_element(AmazonSelectors.CONTAINER_CAPTCHA, false, 2000);
        if (password_alert) {
            return "i18n.collectors.all.password.error";
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        const twofa_instruction = await driver.wait_for_element(AmazonSelectors.CONTAINER_2FA_INSTRUCTIONS, false, 2000);
        if (twofa_instruction) {
            return await twofa_instruction.evaluate(e => e.textContent) || "i18n.collectors.all.2fa.instruction";
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Input 2fa code
        await driver.input_text(AmazonSelectors.FIELD_2FA_CODE, twofa_code);
        await driver.left_click(AmazonSelectors.BUTTON_2FA_DO_NOT_ASK);
        await driver.left_click(AmazonSelectors.BUTTON_2FA_SUBMIT);

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.wait_for_element(AmazonSelectors.CONTAINER_2FA_ALERT, false, 1000);
        if (twofa_alert) {
            return await twofa_alert.evaluate(e => e.textContent) || "i18n.collectors.all.2fa.error";
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Get all order ids
        const orders = await driver.get_all_elements(AmazonSelectors.CONTAINER_ORDER, false, 5000);

        // Return orders
        return Promise.all(orders.map(async (order) => {
            const id = await order.get_attribute(AmazonSelectors.CONTAINER_ID, "textContent");
            const amount = await order.get_attribute(AmazonSelectors.CONTAINER_AMOUNT, "textContent");
            const date = await order.get_attribute(AmazonSelectors.CONTAINER_DATE, "textContent");
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
