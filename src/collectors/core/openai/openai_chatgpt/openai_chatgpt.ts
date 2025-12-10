import { CollectorCaptcha, CollectorState, CollectorType } from '../../../abstractCollector';
import { OpenaiCommonCollector } from '../openai_common/openaiCommon';

export class OpenaiChatgptCollector extends OpenaiCommonCollector {

    static CONFIG = {
        id: "openai_chatgpt",
        name: "OpenAI (ChatGPT Plus)",
        description: "i18n.collectors.openai_chatgpt.description",
        version: "1",
        website: "https://chatgpt.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://auth.openai.com/log-in",
        entryUrl: "https://chatgpt.com/#settings/Account",
        captcha: CollectorCaptcha.NONE,
        autoLogin: {
            localStorageKeys: ['@@auth0spajs@@']
        },
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpenaiChatgptCollector.CONFIG);
    }
}
