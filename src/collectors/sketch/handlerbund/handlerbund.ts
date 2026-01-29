
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandlerbundCollector extends SketchCollector {

    static CONFIG = {
        id: "handlerbund",
        name: "Handlerbund",
        description: "i18n.collectors.handlerbund.description",
        version: "0",
        website: "https://www.haendlerbund.de/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25544.jpg",
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
        loginUrl: "https://www.haendlerbund.de/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HandlerbundCollector.CONFIG);
    }
}
