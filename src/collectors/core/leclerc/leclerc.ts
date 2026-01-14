import { Driver } from '../../../driver/driver';
import { AgentCollector } from '../../../premium/collectors/customAgentCollector';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';
import { LeclercSelectors } from './selectors';

export class LeclercCollector extends AgentCollector {

    static CONFIG = {
        id: "leclerc",
        name: "E.Leclerc",
        description: "i18n.collectors.leclerc.description",
        version: "9",
        website: "https://www.e.leclerc/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg",
        type: CollectorType.AGENT,
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        loginUrl: "https://www.e.leclerc/auth",
        entryUrl: "https://www.e.leclerc/espace-client/commandes/commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeclercCollector.CONFIG);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Accept cookies
        await driver.leftClick(LeclercSelectors.BUTTON_ACCEPT_COOKIES, { raiseException: false, timeout: 5000, navigation: false });

        // Input email
        await driver.inputText(LeclercSelectors.FIELD_EMAIL, params.id);
        await driver.leftClick(LeclercSelectors.BUTTON_CONTINUE, {navigation: false});

        // Check if email is incorrect
        const email_error = await driver.getElement(LeclercSelectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 2000 });
        if (email_error) {
            return await email_error.textContent("i18n.collectors.all.email.error");
        }

        // Check if email is incorrect
        const container_signup = await driver.getElement(LeclercSelectors.CONTAINER_SIGNUP, { raiseException: false, timeout: 2000 });
        if (container_signup) {
            return "i18n.collectors.all.signup.error"
        }

        // Input password
        await driver.inputText(LeclercSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(LeclercSelectors.CHECKBOX_STAY_CONNECTED, {navigation: false});
        await driver.leftClick(LeclercSelectors.BUTTON_LOGIN);

        // Check if password is incorrect
        const password_error = await driver.getElement(LeclercSelectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 5000 });
        if (password_error) {
            return await password_error.textContent("i18n.collectors.all.password.error");
        }
    }
}
