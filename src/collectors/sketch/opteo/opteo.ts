
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpteoCollector extends SketchCollector {

    static CONFIG = {
        id: "opteo",
        name: "Opteo",
        description: "i18n.collectors.opteo.description",
        version: "0",
        website: "https://app.opteo.com/app/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31246.jpg",
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
        loginUrl: "https://app.opteo.com/app/#/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OpteoCollector.CONFIG);
    }
}
