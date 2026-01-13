
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SparkpostEuCollector extends SketchCollector {

    static CONFIG = {
        id: "sparkpost_eu",
        name: "SparkPost EU",
        description: "i18n.collectors.sparkpost_eu.description",
        version: "0",
        website: "https://app.eu.sparkpost.com/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931536.jpg",
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
        loginUrl: "https://app.eu.sparkpost.com/auth",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SparkpostEuCollector.CONFIG);
    }
}
