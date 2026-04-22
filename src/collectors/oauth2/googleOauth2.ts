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
    CONTAINER_EMAIL_ERROR: {
        selector: "div:has(> div > div >div > div > input[type='email']) > div[aria-live='polite'] > div:has(> span)",
        type: "Button next"
    },
    BUTTON_TRY_ANOTHER_WAY: {
        selector: "main > div[data-secondary-action-label]:not(:has([data-primary-action-label])) button",
        type: "Button try another way"
    },
    BUTTON_TRY_ANOTHER_METHOD: {
        selector: "main > div[data-secondary-action-label] > div > div:nth-of-type(2) > div > div > button",
        type: "Button try another method"
    },
    BUTTON_PASSWORD_METHOD: {
        selector: "section ul > li > div[data-challengetype='1']",
        type: "Button password method"
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
        selector: "div:has(> div > div >div > div > div > div > div > div > input[type='password']) > div[aria-live='polite'] > div:has(> span)",
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

    static check(driver: Driver): boolean {
        return driver.url().includes("accounts.google.com") && driver.url().includes("/signin/");
    }

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(GoogleOauth2.check(driver) && driver.url().includes("signin/identifier")) {
            // If input email is displayed
            const inputEmail = await driver.getElement(GoogleOauth2Selectors.INPUT_EMAIL, { raiseException: false });
            if(inputEmail) {
                await driver.inputText(GoogleOauth2Selectors.INPUT_EMAIL, params.email);
            }

            // Click next button
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_LOGIN_NEXT, { navigation: false, delay: 2000 });

            // Check if email error is displayed
            const emailError = await driver.getElement(GoogleOauth2Selectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 1000 });
            if (emailError) {
                return await emailError.textContent("i18n.collectors.all.email.error");
            }

            // Wait for password input
            const inputPassword = await driver.getElement(GoogleOauth2Selectors.INPUT_PASSWORD, { raiseException: false, timeout: 5000 });
            // If not password displayed
            if(!inputPassword) {
                // Click try another way if displayed
                const tryAnotherWayElement = await driver.leftClick(GoogleOauth2Selectors.BUTTON_TRY_ANOTHER_WAY, { raiseException: false, timeout: 100 });
                // Click try another method if displayed
                const tryAnotherMethodElement = await driver.leftClick(GoogleOauth2Selectors.BUTTON_TRY_ANOTHER_METHOD, { raiseException: false, timeout: 100 });
                if(tryAnotherWayElement || tryAnotherMethodElement) {
                    // Select password method
                    await driver.leftClick(GoogleOauth2Selectors.BUTTON_PASSWORD_METHOD);
                }
            }

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
        if(GoogleOauth2.check(driver) && driver.url().includes("signin/challenge")) {
            // Select 2FA method if selection page is displayed
            if(driver.url().includes("signin/challenge/selection")) {
                await driver.leftClick(GoogleOauth2Selectors.BUTTON_2FA_METHOD, { navigation: false });
            }

            // Get and return 2FA instructions
            return driver.getAttribute(GoogleOauth2Selectors.CONTAINER_2FA_INSTRUCTIONS, "textContent");
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        if(GoogleOauth2.check(driver) && driver.url().includes("signin/challenge")) {
            // Get code from UI
            const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);
        }
    }
}