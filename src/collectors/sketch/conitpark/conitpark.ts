
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConitparkCollector extends SketchCollector {

    static CONFIG = {
        id: "conitpark",
        name: "Conitpark",
        description: "i18n.collectors.conitpark.description",
        version: "0",
        website: "https://pcard.mein-contipark.de/konto/transaktionen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132117.jpg",
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
        loginUrl: "https://pcard.mein-contipark.de/konto/transaktionen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConitparkCollector.CONFIG);
    }
}
