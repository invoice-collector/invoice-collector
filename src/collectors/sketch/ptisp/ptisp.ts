
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PtispCollector extends SketchCollector {

    static CONFIG = {
        id: "ptisp",
        name: "PTisp",
        description: "i18n.collectors.ptisp.description",
        version: "0",
        website: "http://www.ptisp.pt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9465.jpg",
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
        loginUrl: "http://www.ptisp.pt",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PtispCollector.CONFIG);
    }
}
