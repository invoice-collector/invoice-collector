
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BubbleCollector extends SketchCollector {

    static CONFIG = {
        id: "bubble",
        name: "bubble",
        description: "i18n.collectors.bubble.description",
        version: "0",
        website: "https://www.bubble.is",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57724.jpg",
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
        loginUrl: "https://www.bubble.is",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BubbleCollector.CONFIG);
    }
}
