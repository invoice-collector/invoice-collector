
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpenaiChatgptCollector extends SketchCollector {

    static CONFIG = {
        id: "openai_chatgpt",
        name: "ChatGPT",
        description: "i18n.collectors.openai_chatgpt.description",
        version: "0",
        website: "https://chatgpt.com",
        logo: "https://pngimg.com/uploads/chatgpt/chatgpt_PNG2.png",
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
        entryUrl: "https://chatgpt.com/#settings/Account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpenaiChatgptCollector.CONFIG);
    }
}
