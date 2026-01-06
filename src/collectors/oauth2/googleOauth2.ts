import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const GoogleOauth2Selectors = {

    // LOGIN

    INPUT_EMAIL: {
        selector: "input[type='email']",
        type: "Input email"
    },
    BUTTON_LOGIN_NEXT: {
        selector: "#identifierNext",
        type: "Button next"
    },
    INPUT_PASSWORD: {
        selector: "input[type='password']",
        type: "Input password"
    },
    BUTTON_PASSWORD_NEXT: {
        selector: "#passwordNext",
        type: "Button next"
    },
    CONTAINER_PASSWORD_ERROR: {
        selector: "html > body > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > c-wiz > main > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form > span > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > span",
        type: "Button next"
    },

    // NEED 2FA

    BUTTON_2FA_METHOD: {
        selector: "div[data-action='selectchallenge']:not([aria-disabled='true'])",
        type: "2FA method button"
    },
    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "section:has(> header > div > h2) > div > div > div",
        info: "2FA instructions container"
    }
}

export class GoogleOauth2 {

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(driver.url().includes("accounts.google.com") && driver.url().includes("signin/identifier")) {
            // If input email is displayed
            const inputEmail = await driver.getElement(GoogleOauth2Selectors.INPUT_EMAIL, { raiseException: false });
            if(inputEmail) {
                await driver.inputText(GoogleOauth2Selectors.INPUT_EMAIL, params.email);
            }

            // Click next button
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_LOGIN_NEXT, { navigation: false, delay: 2000 });

            // Input password and click next
            await driver.inputText(GoogleOauth2Selectors.INPUT_PASSWORD, params.password);
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_PASSWORD_NEXT);

            // Check if password error is displayed
            const passwordError = await driver.getElement(GoogleOauth2Selectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 2000 });
            if (passwordError) {
                return await passwordError.textContent("i18n.collectors.all.password.error");
            }
        }
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        if(driver.url().includes("accounts.google.com") && driver.url().includes("signin/challenge")) {
            // Select 2FA method if selection page is displayed
            if(driver.url().includes("signin/challenge/selection")) {
                await driver.leftClick(GoogleOauth2Selectors.BUTTON_2FA_METHOD, { navigation: false } );
            }

            // Get and return 2FA instructions
            return driver.getAttribute(GoogleOauth2Selectors.CONTAINER_2FA_INSTRUCTIONS, "textContent");
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        if(driver.url().includes("accounts.google.com") && driver.url().includes("signin/challenge")) {
            // Get code from UI
            const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
        }
    }
}