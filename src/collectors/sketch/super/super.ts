
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SuperCollector extends SketchCollector {

    static CONFIG = {
        id: "super",
        name: "Super",
        description: "i18n.collectors.super.description",
        version: "0",
        website: "https://app.super.so/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/984240.jpg",
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
        loginUrl: "https://app.super.so/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SuperCollector.CONFIG);
    }
}
