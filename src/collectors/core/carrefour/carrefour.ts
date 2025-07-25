import { WebCollector } from '../../webCollector';
import { CarrefourSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorCaptcha, DownloadedInvoice, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';

export class CarrefourCollector extends WebCollector {

    static CONFIG = {
        id: "carrefour",
        name: "Carrefour",
        description: "i18n.collectors.carrefour.description",
        version: "9",
        website: "https://www.carrefour.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/3/3b/Logo_Carrefour.svg",
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://www.carrefour.fr/mon-compte/mes-achats/en-ligne",
        captcha: CollectorCaptcha.CLOUDFLARE
    }

    constructor() {
        super(CarrefourCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Wait for captcha to be successful
        await driver.waitForCloudflareTurnstile()

        // Input email and password
        await driver.inputText(CarrefourSelectors.FIELD_EMAIL, params.id, { delay: 500 });
        await driver.inputText(CarrefourSelectors.FIELD_PASSWORD, params.password);

        // Click on submit button
        await driver.leftClick(CarrefourSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(CarrefourSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        const two_factor_auth = await driver.getElement(CarrefourSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
        if (two_factor_auth) {
            return await two_factor_auth.textContent("i18n.collectors.all.2fa.instruction");
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Check if too much attempts
        const twofa_too_much = await driver.getElement(CarrefourSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_too_much) {
            return await twofa_too_much.textContent("i18n.collectors.all.2fa.error");
        }

        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Check if 2fa code is 6 digits
        if (twofa_code.length !== 6) {
            return "i18n.collectors.all.2fa.error";
        }

        // Input 2fa code slowly to avoid focus out
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_0, twofa_code[0], { delay: 200 });
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_1, twofa_code[1], { delay: 200 });
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_2, twofa_code[2], { delay: 200 });
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_3, twofa_code[3], { delay: 200 });
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_4, twofa_code[4], { delay: 200 });
        await driver.inputText(CarrefourSelectors.FIELD_2FA_CODE_5, twofa_code[5], { delay: 200 });

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(CarrefourSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Refuse cookies
        await driver.leftClick(CarrefourSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 10000});

        // Get invoices
        const online_orders = await driver.getElements(CarrefourSelectors.CONTAINER_ORDER, { raiseException: false, timeout: 20000 });
        
        // Build return array
        return await Promise.all(online_orders.map(async invoice => {
            const order_link = await invoice.getAttribute(CarrefourSelectors.CONTAINER_LINK, "href");
            const date = await invoice.getAttribute(CarrefourSelectors.CONTAINER_ORDER_DATE, "textContent");
            const amount = await invoice.getAttribute(CarrefourSelectors.CONTAINER_ORDER_AMOUNT, "textContent");
    
            const id = order_link.split("/").pop();
            if (!id) {
                throw new Error(`Cannot extract id from ${order_link}`);
            }
            const date_part = date.split('/');
            let year = parseInt(date_part[2]);
            year = year < 100 ? year + 2000 : year; // Convert to 4 digits
            const month = parseInt(date_part[1]) - 1;
            const day = parseInt(date_part[0]);
            const timestamp = Date.UTC(year, month, day);
            const link = `https://www.carrefour.fr/mon-compte/mes-achats/facture/${id}?invoiceType=Invoice`;

            return {
                id,
                link,
                timestamp,
                amount
            };
        }));
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return await this.download_link(driver, invoice);
    }
}
