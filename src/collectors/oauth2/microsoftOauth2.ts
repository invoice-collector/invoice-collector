import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const MicrosoftOauth2Selectors = {
    // LOGIN

    BUTTON_PASSWORD_AUTHENTICATION_METHOD: {
        selector: "div[data-testid='tileList']> div[role='listitem']:nth-of-type(2)",
        info: "Password authentication method button"
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

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(driver.url().includes("login.live.com/oauth2")) {
            // Select password authentication method if displayed
            const passwordAuthMethod = await driver.getElement(MicrosoftOauth2Selectors.BUTTON_PASSWORD_AUTHENTICATION_METHOD, {timeout: 0});
            if(passwordAuthMethod)
                await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_PASSWORD_AUTHENTICATION_METHOD, {navigation: false});
                await driver.inputText(MicrosoftOauth2Selectors.INPUT_PASSWORD, params.password);
                await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_SUBMIT_PASSWORD);

                // Check if password is incorrect
                const twofa_alert = await driver.getElement(MicrosoftOauth2Selectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 2000 });
                if (twofa_alert) {
                    return await twofa_alert.textContent("i18n.collectors.all.password.error");
                }
        }
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        if(driver.url().includes("login.live.com/oauth2")) {
            // Click send notification button
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_SEND_NOTIFICATION, { navigation: false });

            // Get 2FA instructions
            const texts = await driver.getAttributes(MicrosoftOauth2Selectors.CONTAINERS_2FA_INSTRUCTIONS, "textContent");
            return texts.join(". ");
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        if(driver.url().includes("login.live.com/oauth2")) {
            // Get code from UI
            const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
        }
    }
}