import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const GoogleOauth2Selectors = {
    BUTTON_LOGIN_NEXT: {
        selector: "#identifierNext",
        type: "Button next"
    },
    INPUT_PASSWORD: {
        selector: "input[type='password']",
        type: "Button next"
    },
    BUTTON_PASSWORD_NEXT: {
        selector: "#passwordNext",
        type: "Button next"
    }
}

export class GoogleOauth2 {

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(driver.url().includes("accounts.google.com") && driver.url().includes("signin/identifier")) {
            // Click next button
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_LOGIN_NEXT, { navigation: false });

            // Input password and click next
            await driver.inputText(GoogleOauth2Selectors.INPUT_PASSWORD, params.password);
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_PASSWORD_NEXT);
        }
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        //TODO
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        //TODO
    }
}