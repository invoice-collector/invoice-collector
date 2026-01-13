
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DgnCollector extends SketchCollector {

    static CONFIG = {
        id: "dgn",
        name: "DGN",
        description: "i18n.collectors.dgn.description",
        version: "0",
        website: "https://www.dgn.de/kunde/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43022.jpg",
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
        loginUrl: "https://www.dgn.de/kunde/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DgnCollector.CONFIG);
    }
}
