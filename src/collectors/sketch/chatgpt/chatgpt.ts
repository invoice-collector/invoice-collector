
import { SketchCollector } from '../../sketchCollector';

export class ChatgptCollector extends SketchCollector {

    static CONFIG = {
        id: "chatgpt",
        name: "ChatGPT",
        description: "i18n.collectors.chatgpt.description",
        version: "0",
        website: "https://chat.openai.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1808174.jpg",
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
        entryUrl: "https://chat.openai.com/auth/login",
    }

    constructor() {
        super(ChatgptCollector.CONFIG);
    }
}
