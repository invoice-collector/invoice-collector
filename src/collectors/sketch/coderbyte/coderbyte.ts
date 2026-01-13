
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoderbyteCollector extends SketchCollector {

    static CONFIG = {
        id: "coderbyte",
        name: "Coderbyte",
        description: "i18n.collectors.coderbyte.description",
        version: "0",
        website: "https://coderbyte.com/dashboard/avimedical-bijzh#settings-plan_and_billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654746.jpg",
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
        loginUrl: "https://coderbyte.com/dashboard/avimedical-bijzh#settings-plan_and_billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoderbyteCollector.CONFIG);
    }
}
