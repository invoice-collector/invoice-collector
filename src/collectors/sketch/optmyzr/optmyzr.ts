
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OptmyzrCollector extends SketchCollector {

    static CONFIG = {
        id: "optmyzr",
        name: "OPTMYZR",
        description: "i18n.collectors.optmyzr.description",
        version: "0",
        website: "https://tools.optmyzr.com/tools",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/587689.jpg",
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
        loginUrl: "https://tools.optmyzr.com/tools",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OptmyzrCollector.CONFIG);
    }
}
