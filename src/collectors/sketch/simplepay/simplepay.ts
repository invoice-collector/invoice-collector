
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimplepayCollector extends SketchCollector {

    static CONFIG = {
        id: "simplepay",
        name: "SimplePay",
        description: "i18n.collectors.simplepay.description",
        version: "0",
        website: "https://www.simplepay.co.za/signup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233034.jpg",
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
        loginUrl: "https://www.simplepay.co.za/signup",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SimplepayCollector.CONFIG);
    }
}
