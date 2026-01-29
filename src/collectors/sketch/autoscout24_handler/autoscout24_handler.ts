
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Autoscout24HandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "autoscout24_handler",
        name: "Autoscout24 Handler",
        description: "i18n.collectors.autoscout24_handler.description",
        version: "0",
        website: "https://www.autoscout24.de/dealer-invoice-download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4170824.jpg",
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
        loginUrl: "https://www.autoscout24.de/dealer-invoice-download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Autoscout24HandlerCollector.CONFIG);
    }
}
