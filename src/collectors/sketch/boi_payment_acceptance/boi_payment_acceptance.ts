
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoiPaymentAcceptanceCollector extends SketchCollector {

    static CONFIG = {
        id: "boi_payment_acceptance",
        name: "BOI Payment Acceptance",
        description: "i18n.collectors.boi_payment_acceptance.description",
        version: "0",
        website: "https://boipa.com/business/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120026.jpg",
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
        loginUrl: "https://boipa.com/business/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BoiPaymentAcceptanceCollector.CONFIG);
    }
}
