
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YourxpertCollector extends SketchCollector {

    static CONFIG = {
        id: "yourxpert",
        name: "yourxpert",
        description: "i18n.collectors.yourxpert.description",
        version: "0",
        website: "https://www.yourxpert.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23272.jpg",
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
        loginUrl: "https://www.yourxpert.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YourxpertCollector.CONFIG);
    }
}
