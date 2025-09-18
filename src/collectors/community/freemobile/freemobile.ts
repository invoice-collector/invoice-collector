import fs from 'fs';
import { WebCollector } from '../../webCollector';
import { FreeMobileSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';
import { timestampFromString } from '../../../utils';

export class FreeMobileCollector extends WebCollector {

    static CONFIG = {
        id: "freemobile",
        name: "Free Mobile",
        description: "i18n.collectors.freemobile.description",
        version: "0",
        website: "https://mobile.free.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg",
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.all.identifier",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://mobile.free.fr/account/v2"
    }

    constructor() {
        super(FreeMobileCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {

        // Input id and password
        await driver.inputText(FreeMobileSelectors.FIELD_IDENTIFIER, params.id);
        await driver.inputText(FreeMobileSelectors.FIELD_PASSWORD, params.password);

        // Click on submit button
        await driver.leftClick(FreeMobileSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(FreeMobileSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        if (driver.url() === this.config.entryUrl) return;

        const two_factor_auth = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_INSTRUCTIONS, { timeout: 2000 });
        return await two_factor_auth?.textContent("i18n.collectors.all.2fa.instruction") || "i18n.collectors.all.2fa.instruction";
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Check if too much attempts
        const twofa_too_much = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
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
        await driver.inputText(FreeMobileSelectors.FIELD_2FA_CODE, twofa_code, { delay: 200 });

        // Click on rember login
        await driver.leftClick(FreeMobileSelectors.LABEL_SAVE_LOGIN, { navigation: false });

        // Click on submit button
        await driver.leftClick(FreeMobileSelectors.BUTTON_2FA_SUBMIT);

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(FreeMobileSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Show invoices
        await driver.leftClick(FreeMobileSelectors.BUTTON_SHOW_INVOICES, { navigation: false });

        // Show more invoices
        while((await driver.leftClick(FreeMobileSelectors.BUTTON_MORE_INVOICES, { raiseException: false, timeout: 1000, navigation: false })) != null) {}

        let invoices: Invoice[] = [];

        // Get last invoice
        const first_invoice = await driver.getElement(FreeMobileSelectors.CONTAINER_FIRST_INVOICE, { raiseException: false });

        if (first_invoice != null) {
        
            const link = await first_invoice.getAttribute(FreeMobileSelectors.C0NTAINER_INVOICE_LINK, "href");
            const date = await first_invoice.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_DATE, "textContent");
            const amount = await first_invoice.getAttribute(FreeMobileSelectors.CONTAINER_FIRST_INVOICE_AMOUNT, "textContent");

            const id = link.split("/").pop();
            if (!id) {
                throw new Error(`Cannot extract id from ${link}`);
            }
            const timestamp = timestampFromString((date.split(' - ').pop() || date), 'MMMM yyyy', 'fr');

            invoices.push({
                id,
                link: `https://mobile.free.fr${link}`,
                timestamp,
                amount: `${amount.replace('€',',')}€`
            });

        }

        // Get invoices
        const next_invoices_raw = await driver.getElements(FreeMobileSelectors.CONTAINER_INVOICE, { raiseException: false });
        
        // Build return array
        const next_invoices = await Promise.all(next_invoices_raw.map(async invoice => {
            const link = await invoice.getAttribute(FreeMobileSelectors.C0NTAINER_INVOICE_LINK, "href");
            const date = await invoice.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_DATE, "textContent");
            const amount = await invoice.getAttribute(FreeMobileSelectors.CONTAINER_INVOICE_AMOUNT, "textContent");
    
            const id = link.split("/").pop();
            if (!id) {
                throw new Error(`Cannot extract id from ${link}`);
            }
            const timestamp = timestampFromString(date, 'MMMM yyyy', 'fr');

            return {
                id,
                link: `https://mobile.free.fr${link}`,
                timestamp,
                amount
            };
        }));

        invoices = invoices.concat(next_invoices);

        return invoices;
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            documents: [
                await this.download_link(driver, invoice.link)
            ]
        };
    }
}
