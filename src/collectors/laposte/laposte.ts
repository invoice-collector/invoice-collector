import { ScrapperCollector } from '../scrapperCollector';
import { LaposteSelectors } from './selectors';
import { Driver } from '../../driver/driver';
import { DownloadedInvoice, Invoice } from '../abstractCollector';
import { TwofaPromise } from '../../collect/twofaPromise';

export class LaposteCollector extends ScrapperCollector {

    static CONFIG = {
        name: "La Poste",
        description: "i18n.collectors.laposte.description",
        version: "1",
        website: "https://www.laposte.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/0/0d/La_Poste_2022.svg",
        params: {
            email: {
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://www.laposte.fr/espaceclient/services/logout?session=true"
    }

    constructor() {
        super(LaposteCollector.CONFIG);
    }

    async is_logged_in(driver: Driver): Promise<boolean> {
        return !driver.url().includes("https://moncompte.laposte.fr/moncompte-auth/auth")
    }

    async login(driver: Driver, params: any): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(LaposteSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000, navigation: false });

        // Input email and password
        await driver.inputText(LaposteSelectors.FIELD_EMAIL, params.email);
        await driver.inputText(LaposteSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(LaposteSelectors.CHECKBOX_REMEMBER_ME, { navigation: false});

        // Click on submit button
        await driver.leftClick(LaposteSelectors.BUTTON_SUBMIT);

        // Check if login alert exists
        const login_alert = await driver.getElement(LaposteSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 })
        if (login_alert) {
            return await login_alert.textContent("i18n.collectors.all.identifier.error");
        }
    }

    async isTwofa(driver: Driver): Promise<string | void> {
        // Check if 2FA is required
        await driver.getElement(LaposteSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 18000 });
        const twofa_instruction = await driver.getElement(LaposteSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });

        if (twofa_instruction) {
            return await twofa_instruction.textContent("i18n.collectors.all.2fa.instruction");
        }
    }
    
    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise): Promise<string | void> {
        // Wait for 2fa code from UI
        const twofa_code = await twofa_promise.code();

        // Input 2fa code
        await driver.inputText(LaposteSelectors.INPUT_2FA_CODE, twofa_code);
        await driver.leftClick(LaposteSelectors.BUTTON_2FA_SUBMIT, { navigation: false });
    
        // Check if 2fa code is incorrect
        const twofa_alert = await driver.getElement(LaposteSelectors.CONTAINER_2FA_ALERT, { raiseException: false, timeout: 2000 });
        if (twofa_alert) {
            return await twofa_alert.textContent("i18n.collectors.all.2fa.error");
        }

        await driver.leftClick(LaposteSelectors.BUTTON_SAVE_DEVICE, { raiseException: false, timeout: 5000 });
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Wait for the page to load
        await driver.getElement(LaposteSelectors.CONTAINER_LOADED, { raiseException: false, timeout: 10000 });

        // Go to the orders page
        await driver.goto("https://www.laposte.fr/espaceclient/mes-achats");

        // Get json orders
        const data = await driver.goToJson("https://www.laposte.fr/espaceclient/api/v1/commands?limit=10&offset=0");

        return data.data.map(order => {
            return {
                id: order.id,
                amount: `${order.amount} €`,
                timestamp: new Date(order.date).getTime(),
                link: `https://www.laposte.fr/mes-commandes/detail/${order.id}`
            }
        });
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        // Go to the detail page
        await driver.goto(invoice.link);

        // Click download invoice
        await driver.leftClick(LaposteSelectors.BUTTON_DOWNLOAD);

        // Wait for the download to complete
        return await this.download_from_file(driver, invoice);
    }
}
