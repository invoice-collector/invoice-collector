
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SendyCollector extends SketchCollector {

    static CONFIG = {
        id: "sendy",
        name: "Sendy",
        description: "i18n.collectors.sendy.description",
        version: "0",
        website: "http://www.sendy.co",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7902.jpg",
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
        loginUrl: "http://www.sendy.co",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SendyCollector.CONFIG);
    }
}
