import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const MicrosoftOauth2Selectors = {
    BUTTON_SEND_NOTIFICATION: {
        selector: "button[type='submit'][data-testid='primaryButton']",
        type: "Button send notification"
    },
}

export class MicrosoftOauth2 {

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        //TODO
    }

    static async needTwofa(driver: Driver): Promise<string | void> {
        if(driver.url().includes("login.live.com/oauth2")) {
            await driver.leftClick(MicrosoftOauth2Selectors.BUTTON_SEND_NOTIFICATION, { navigation: false });
        }
    }

    static async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        //TODO
    }
}