
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChatfuelCollector extends SketchCollector {

    static CONFIG = {
        id: "chatfuel",
        name: "Chatfuel",
        description: "i18n.collectors.chatfuel.description",
        version: "0",
        website: "https://dashboard.chatfuel.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69939.jpg",
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
        loginUrl: "https://dashboard.chatfuel.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChatfuelCollector.CONFIG);
    }
}
