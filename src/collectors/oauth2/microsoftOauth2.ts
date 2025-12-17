import { TwofaPromise } from "../../collect/twofaPromise";
import { Driver } from "../../driver/driver";
import { WebSocketServer } from "../../websocket/webSocketServer";

export const MicrosoftOauth2Selectors = {
    BUTTON_SEND_NOTIFICATION: {
        selector: "button[type='submit'][data-testid='primaryButton']",
        type: "Button send notification"
    },
    CONTAINERS_2FA_INSTRUCTIONS: {
        selector: "h1[data-testid='title'], div[data-testid='displaySign'], div[data-testid='description']",
        type: "2FA instructions container"
    }
}

export class MicrosoftOauth2 {

    static async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        //TODO
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