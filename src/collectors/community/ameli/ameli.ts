import { URL } from 'url';
import { WebCollector } from '../../webCollector';
import { AmeliSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { CollectorType, DownloadedInvoice, Invoice } from '../../abstractCollector';
import { TwofaPromise } from '../../../collect/twofaPromise';
import { timestampFromString, delay } from '../../../utils';

export class AmeliCollector extends WebCollector {

    static CONFIG = {
        id: "ameli",
        name: "Ameli",
        description: "i18n.collectors.ameli.description",
        version: "0",
        website: "https://assure.ameli.fr",
        logo: "https://www.ameli.fr/themes/custom/ameli_v2/libraries/dist/images/login/ronde.svg",
        type: CollectorType.WEB,
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.ameli.identifier.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        loginUrl: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure",
        entryUrl: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_nfpb=true&_pageLabel=as_releve_mensuel_paiement_page",
    }

    constructor() {
        super(AmeliCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(AmeliSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 1000, navigation: false });

        // Go to login page
        await driver.leftClick(AmeliSelectors.BUTTON_LOGIN, { raiseException: false, timeout: 1000, navigation: false });

        // Input id and password
        await driver.inputText(AmeliSelectors.FIELD_NIR, params.id);
        await driver.inputText(AmeliSelectors.FIELD_PASSWORD, params.password);

        // Click on submit button
        await driver.leftClick(AmeliSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(AmeliSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.password.error");
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        if (!driver.url().includes("ameliconnect.ameli.fr")) return;

        const two_factor_auth = await driver.getElement(AmeliSelectors.CONTAINER_2FA_INSTRUCTIONS, { timeout: 2000 });
        let message = await two_factor_auth?.textContent("i18n.collectors.all.2fa.instruction") || "i18n.collectors.all.2fa.instruction";

        // Send 2FA
        await driver.leftClick(AmeliSelectors.BUTTON_2FA_SEND);

        return message;
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Check if 2fa code is 6 digits
        if (twofa_code.length !== 6) {
            return "i18n.collectors.all.2fa.error";
        }

        // Input 2fa code
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_1, twofa_code[0]);
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_2, twofa_code[1]);
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_3, twofa_code[2]);
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_4, twofa_code[3]);
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_5, twofa_code[4]);
        await driver.inputText(AmeliSelectors.FIELD_2FA_CODE_6, twofa_code[5]);

        // Save 2FA in cookies
        await driver.leftClick(AmeliSelectors.LABEL_2FA_COOKIE, { navigation: false });

        // Submit 2FA
        await driver.leftClick(AmeliSelectors.BUTTON_2FA_SUBMIT);

        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(AmeliSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 1000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {

        // Goto paiement page
        await driver.goto(AmeliCollector.CONFIG.entryUrl);

        // Show more invoices
        try {
            while ((await driver.leftClick(AmeliSelectors.BUTTON_MORE_PAIMENT, { raiseException: false, timeout: 1000, delay: 500, navigation: false })) != null) { }
        } catch (err) { }

        let invoices: Invoice[] = [];

        // Get all month
        for (const paiement of (await driver.getElements(AmeliSelectors.CONTAINER_PAIEMENT_MONTH))) {

            if ((await paiement.getElement(AmeliSelectors.CONTAINER_LINK)) != null) {

                const paiement_onclik = await paiement.getAttribute(AmeliSelectors.CONTAINER_LINK, "onclick");
                const date = await paiement.getAttribute(AmeliSelectors.CONTAINER_PAIMENT_DATE, "textContent");

                const link = `https://assure.ameli.fr${paiement_onclik.split("'")[1]}`;

                const id = new URL(link).searchParams.get("PDF.idFichier");
                if (!id) {
                    throw new Error(`Cannot extract id from ${link}`);
                }

                const timestamp = timestampFromString(date, 'MMMM yyyy', 'fr');

                invoices.push({
                    id,
                    link,
                    timestamp
                });

            }

        }

        return invoices;
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        await delay(1000);
        return {
            ...invoice,
            documents: [
                await this.download_link(driver, invoice.link)
            ]
        };
    }

    async is_logged_in(driver: Driver): Promise<boolean> {
        const paiement_container = await driver.getElement(AmeliSelectors.CONTAINER_PAIEMENT, { raiseException: false, timeout: 1000 });
        return paiement_container != null;
    }
}
