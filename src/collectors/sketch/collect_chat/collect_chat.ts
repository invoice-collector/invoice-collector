
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CollectChatCollector extends SketchCollector {

    static CONFIG = {
        id: "collect_chat",
        name: "collect.chat",
        description: "i18n.collectors.collect_chat.description",
        version: "0",
        website: "https://dashboard.collect.chat/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/984867.jpg",
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
        loginUrl: "https://dashboard.collect.chat/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CollectChatCollector.CONFIG);
    }
}
