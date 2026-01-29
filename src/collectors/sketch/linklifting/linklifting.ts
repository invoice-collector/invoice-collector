
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LinkliftingCollector extends SketchCollector {

    static CONFIG = {
        id: "linklifting",
        name: "Linklifting",
        description: "i18n.collectors.linklifting.description",
        version: "0",
        website: "https://linklifting.com/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519854.jpg",
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
        loginUrl: "https://linklifting.com/payments/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LinkliftingCollector.CONFIG);
    }
}
