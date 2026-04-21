import { TwofaPromise } from "../../../collect/twofaPromise";
import { CollectorCaptcha, CollectorState, CollectorType, Invoice } from "../../abstractCollector";
import { Driver, Element } from "../../../driver/driver";
import { WebSocketServer } from "../../../websocket/webSocketServer";
import { GoogleWorkspaceSelectors } from "./selectors";
import { GoogleOauth2 } from "../../oauth2/googleOauth2";
import { WebCollector } from "../../webCollector";

export class GoogleWorkspaceCollector extends WebCollector {

    static CONFIG = {
        id: "google_workspace",
        name: "Google Workspace",
        description: "i18n.collectors.google_workspace.description",
        version: "5",
        website: "https://workspace.google.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
        type: CollectorType.AGENT,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://accounts.google.com/",
        entryUrl: "https://admin.google.com/ac/billing/subscriptions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleWorkspaceCollector.CONFIG);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Handle login via Google OAuth2 helper
        return await GoogleOauth2.login(driver, params, webSocketServer);
    }

    async needTwofa(driver: Driver): Promise<string | void> {
        // Handle 2FA need via Google OAuth2 helper
        return await GoogleOauth2.needTwofa(driver);
    }

    async twofa(driver: Driver, params: any, twofaPromise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Handle 2FA via Google OAuth2 helper
        const twofaError = await GoogleOauth2.twofa(driver, params, twofaPromise, webSocketServer);
        if (twofaError) {
            return twofaError;
        }

        // Select first account in the list
        //await driver.leftClick(GoogleWorkspaceSelectors.SELECT_ACCOUNT_LIST);
        
        // Check if account has google workspace enabled
        const noWorkspaceError = await driver.getElement(GoogleWorkspaceSelectors.CONTAINER_NO_WORKSPACE, { raiseException: false, timeout: 10000 });
        if (noWorkspaceError) {
            return await noWorkspaceError.textContent("i18n.collectors.all.signup.error");
        }
    }

    async navigate(driver: Driver): Promise<void> {
       throw new Error("Method not implemented."); 
    }

    async getInvoices(driver: Driver): Promise<Element[]> {
        throw new Error("Method not implemented.");
    }

    async data(driver: Driver, element: Element): Promise<Invoice | null> {
        throw new Error("Method not implemented.");
    }

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}
