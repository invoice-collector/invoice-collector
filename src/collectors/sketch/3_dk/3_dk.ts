
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _3DkCollector extends SketchCollector {

    static CONFIG = {
        id: "3_dk",
        name: "3.dk",
        description: "i18n.collectors.3_dk.description",
        version: "0",
        website: "https://www.3.dk/selvbetjening/login?returnUrl=/selvbetjening/regning/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8998.jpg",
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
        loginUrl: "https://www.3.dk/selvbetjening/login?returnUrl=/selvbetjening/regning/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_3DkCollector.CONFIG);
    }
}
