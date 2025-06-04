import { Driver } from '../../driver/driver';
import { DownloadedInvoice, Invoice } from '../abstractCollector';
import { ScrapperCollector } from '../scrapperCollector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../utils';
import { TwofaPromise } from '../../collect/twofaPromise';

export class AmazonBusinessCollector extends ScrapperCollector {

    static CONFIG = {
        name: "Amazon Business FR",
        description: "i18n.collectors.amazon_business.description",
        version: "3",
        website: "https://www.amazon.fr",
        logo: "https://sellerengine.com/wp-content/uploads/2018/11/Amazon-businesss-sq.png",
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
            company: {
                type: "string",
                name: "i18n.collectors.amazon_business.company",
                placeholder: "i18n.collectors.amazon_business.company.placeholder",
                mandatory: false
            }
        },
        entryUrl: "https://www.amazon.fr/gp/css/order-history#time/yoPast3months/pagination/1/"
    }

    constructor() {
        super(AmazonBusinessCollector.CONFIG);
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
        await driver.left_click(AmazonSelectors.BUTTON_2FA_DO_NOT_ASK, {raise_exception: false, timeout: 100, navigation: false});
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
            const pretty_id = await order.get_attribute(AmazonSelectors.CONTAINER_ID, "textContent");
            const id_label = await order.get_attribute(AmazonSelectors.CONTAINER_ID_LABEL, "textContent");
            const id = pretty_id.replace(id_label.trim(), "").trim();
            const amount = await order.get_attribute(AmazonSelectors.CONTAINER_AMOUNT, "textContent");
            const date = await order.get_attribute(AmazonSelectors.CONTAINER_DATE, "textContent");
            const link = `https://www.amazon.fr/gp/css/summary/print.html/ref=oh_aui_ajax_invoice?ie=UTF8&orderID=${id}`;
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
        return await this.download_link(driver, invoice);
    }
}
