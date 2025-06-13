import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { WebCollector } from '../../webCollector';
import { AmazonSelectors } from './selectors';
import { timestampFromString } from '../../../utils';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class AmazonBusinessCollector extends WebCollector {

    static CONFIG = {
        name: "Amazon Business FR",
        description: "i18n.collectors.amazon_business.description",
        version: "6",
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
        entryUrl: "https://www.amazon.fr/gp/css/order-history?language=fr_FR#time/yoPast3months/pagination/1/"
    }

    constructor() {
        super(AmazonBusinessCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Navigate to the amazon business login page
        await driver.goto("https://www.amazon.fr/ap/signin?language=fr_FR&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcss%2Forder-history%3Flanguage%3Dfr_FR%23time%2FyoPast3months%2Fpagination%2F1%2F&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_fr&openid.mode=checkid_setup&marketPlaceId=A13V1IB3VIYZZH&language=en_GB&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_fr&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ref_=ab_welcome_bw_ap-sn_dsk&openid.pape.preferred_auth_policies=Singlefactor&switch_account=signin&disableLoginPrepopulate=1");

        // Input email and password
        await driver.inputText(AmazonSelectors.FIELD_EMAIL, params.id);
        await driver.inputText(AmazonSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(AmazonSelectors.BUTTON_SUBMIT);

        // Check if alert is displayed
        const login_alert = await driver.getElement(AmazonSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.identifier.error");
        }

        // Select company if required
        await driver.leftClick(AmazonSelectors.CONTAINER_COMPANY_SELECTION, { raiseException: false, timeout: 5000 });
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

        // Select company if required
        await driver.leftClick(AmazonSelectors.CONTAINER_COMPANY_SELECTION, { raiseException: false, timeout: 5000 });
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Get UI language
        const language = await driver.getAttribute(AmazonSelectors.CONTAINER_LANGUAGE, "textContent");

        // Get all order ids
        const orders = await driver.getElements(AmazonSelectors.CONTAINER_ORDER, { raiseException: false, timeout: 5000 });

        // Return orders
        return Promise.all(orders.map(async (order) => {
            const pretty_id = await order.getAttribute(AmazonSelectors.CONTAINER_ID, "textContent");
            const id_label = await order.getAttribute(AmazonSelectors.CONTAINER_ID_LABEL, "textContent");
            const id = pretty_id.replace(id_label.trim(), "").trim();
            const amount = await order.getAttribute(AmazonSelectors.CONTAINER_AMOUNT, "textContent");
            const date = await order.getAttribute(AmazonSelectors.CONTAINER_DATE, "textContent");
            const link = `https://www.amazon.fr/gp/css/summary/print.html/ref=oh_aui_ajax_invoice?ie=UTF8&orderID=${id}`;
            const timestamp = timestampFromString(date, 'd MMMM yyyy', language);

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
