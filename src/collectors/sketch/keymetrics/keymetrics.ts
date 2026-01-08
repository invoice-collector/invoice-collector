
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KeymetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "keymetrics",
        name: "Keymetrics",
        description: "i18n.collectors.keymetrics.description",
        version: "0",
        website: "https://app.keymetrics.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59728.jpg",
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
        loginUrl: "https://app.keymetrics.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KeymetricsCollector.CONFIG);
    }
}
