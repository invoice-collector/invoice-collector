
import { SketchCollector } from '../../sketchCollector';

export class HappyfoxChatCollector extends SketchCollector {

    static CONFIG = {
        id: "happyfox_chat",
        name: "HappyFox Chat",
        description: "i18n.collectors.happyfox_chat.description",
        version: "0",
        website: "https://happyfoxchat.com/a/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18245.jpg",
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
        entryUrl: "https://happyfoxchat.com/a/login",
    }

    constructor() {
        super(HappyfoxChatCollector.CONFIG);
    }
}
