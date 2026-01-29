
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UberEatsMerchantManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_eats_merchant_manager",
        name: "Uber Eats Merchant - Manager",
        description: "i18n.collectors.uber_eats_merchant_manager.description",
        version: "0",
        website: "https://merchants.ubereats.com/manager",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4614276.jpg",
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
        loginUrl: "https://merchants.ubereats.com/manager",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UberEatsMerchantManagerCollector.CONFIG);
    }
}
