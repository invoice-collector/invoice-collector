import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const GoogleOauth2Selectors = {
    BUTTON_NEXT: {
        selector: "#identifierNext",
        type: "Button next"
    },
}

export class GoogleOauth2 {

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        if(driver.url().includes("accounts.google.com") && driver.url().includes("signin/identifier")) {
            await driver.leftClick(GoogleOauth2Selectors.BUTTON_NEXT, { navigation: false });
        }
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        //TODO
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        //TODO
    }
}