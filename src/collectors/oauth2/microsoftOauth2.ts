import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const MicrosoftOauth2Selectors = {
    // LOGIN

    BUTTON_OTHER_AUTHENTICATION_METHODS: {
        selector: "::-p-xpath(//div[@id='view']/div/span[@data-testid='viewFooter']/div/span[not(contains(text(), '?'))])",
        info: "Display more authentication options button"
    },
    BUTTON_DISPLAY_MORE_OPTIONS: {
        selector: "#view > div > div:not(:has(div[role='listitem'])) > button",
        info: "Display more authentication options button"
    },
    BUTTON_PASSWORD_AUTHENTICATION_METHOD: {
        selector: "#view > div > div > div[role='listitem'] svg path[d*='M11.78 10.22a']",
        info: "Password authentication method button"
    },
    BUTTON_PHONE_OTP_METHOD: {
        selector: "#view > div > div > div[role='listitem'] > div[aria-label*='******']:not([aria-label*='@'])",
        info: "Phone OTP method button"
    },
    INPUT_PASSWORD: {
        selector: "#passwordEntry",
        info: "Password input field"
    },
    BUTTON_SUBMIT_PASSWORD: {
        selector: "button[type='submit']",
        info: "Submit password button"
    },
    CONTAINER_PASSWORD_ERROR: {
        selector: "div[id*='validationMessage'][role='alert']",
        info: "Password error message container"
    },
    BUTTON_STAY_CONNECTED: {
        selector: "#view > div > div > button[data-testid='primaryButton']",
        info: "Stay connected checkbox"
    },
    BUTTON_LOOKS_GOOD: {
        selector: "#iLooksGood",
        info: "Looks good button"
    },

    // TWOFA

    BUTTON_SEND_NOTIFICATION: {
        selector: "button[type='submit'][data-testid='primaryButton']",
        info: "Button send notification"
    },
    CONTAINERS_2FA_INSTRUCTIONS: {
        selector: "h1[data-testid='title'], div[data-testid='displaySign'], div[data-testid='description']",
        info: "2FA instructions container"
    }
}

export class MicrosoftOauth2 {

    static check(driver: Driver): boolean {
        return driver.url().includes("login.live.com/oauth2");
    }

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(MicrosoftOauth2.check(driver)) {
            // Display other authentication methods if the button is displayed
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_OTHER_AUTHENTICATION_METHODS, { timeout: 1000, raiseException: false });

            // Display more options if button is displayed
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_DISPLAY_MORE_OPTIONS, { timeout: 1000, raiseException: false });

            // Select password authentication method if displayed
            const passwordAuthMethod = await driver.getElement(MicrosoftOauth2Selectors.BUTTON_PASSWORD_AUTHENTICATION_METHOD, { timeout: 100, raiseException: false });
            if(passwordAuthMethod) {
                await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_PASSWORD_AUTHENTICATION_METHOD);
            }

            // Input password
            await driver.inputText(MicrosoftOauth2Selectors.INPUT_PASSWORD, params.password);
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_SUBMIT_PASSWORD);

            // Check if password is incorrect
            const twofa_alert = await driver.getElement(MicrosoftOauth2Selectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 2000 });
            if (twofa_alert) {
                return await twofa_alert.textContent("i18n.collectors.all.password.error");
            }

            // Stay connected if displayed
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_STAY_CONNECTED, { timeout: 1000, raiseException: false });

            // Infos looks good if displayed
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_LOOKS_GOOD, { timeout: 1000, raiseException: false });
        }
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        if(MicrosoftOauth2.check(driver)) {
            // Click send notification button
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_SEND_NOTIFICATION, { raiseException: false, timeout: 5000, navigation: false });

            // Get 2FA instructions
            const texts = await driver.getAttributes(MicrosoftOauth2Selectors.CONTAINERS_2FA_INSTRUCTIONS, "textContent");
            return texts.join(". ");
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        if(MicrosoftOauth2.check(driver)) {
            // Get code from UI
            const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
        }
    }
}
