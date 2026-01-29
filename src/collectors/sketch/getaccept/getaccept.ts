
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GetacceptCollector extends SketchCollector {

    static CONFIG = {
        id: "getaccept",
        name: "GetAccept",
        description: "i18n.collectors.getaccept.description",
        version: "0",
        website: "https://app.getaccept.com/?_ga=2.103908552.978029228.1523944158-1022050628.1523944158",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18676.jpg",
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
        loginUrl: "https://app.getaccept.com/?_ga=2.103908552.978029228.1523944158-1022050628.1523944158",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GetacceptCollector.CONFIG);
    }
}
