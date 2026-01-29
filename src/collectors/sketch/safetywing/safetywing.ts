
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SafetywingCollector extends SketchCollector {

    static CONFIG = {
        id: "safetywing",
        name: "SafetyWing",
        description: "i18n.collectors.safetywing.description",
        version: "0",
        website: "https://safetywing.com/nomad-insurance/profile/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347052.jpg",
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
        loginUrl: "https://safetywing.com/nomad-insurance/profile/receipts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SafetywingCollector.CONFIG);
    }
}
