
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BitoAiCollector extends SketchCollector {

    static CONFIG = {
        id: "bito_ai",
        name: "Bito.ai",
        description: "i18n.collectors.bito_ai.description",
        version: "0",
        website: "https://billing.bito.ai/p/session/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2110711.jpg",
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
        loginUrl: "https://billing.bito.ai/p/session/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BitoAiCollector.CONFIG);
    }
}
