
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OptimonkCollector extends SketchCollector {

    static CONFIG = {
        id: "optimonk",
        name: "OptiMonk",
        description: "i18n.collectors.optimonk.description",
        version: "0",
        website: "https://my.optimonk.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37596.jpg",
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
        loginUrl: "https://my.optimonk.com/en/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OptimonkCollector.CONFIG);
    }
}
