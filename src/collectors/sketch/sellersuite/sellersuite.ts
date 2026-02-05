
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SellersuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "sellersuite",
        name: "Sellersuite",
        description: "i18n.collectors.sellersuite.description",
        version: "0",
        website: "https://pay.stripe.com/invoice/invst_0Ty0ieAwz12P2OoIYVcjmCjygU",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144438.jpg",
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
        loginUrl: "https://pay.stripe.com/invoice/invst_0Ty0ieAwz12P2OoIYVcjmCjygU",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SellersuiteCollector.CONFIG);
    }
}
