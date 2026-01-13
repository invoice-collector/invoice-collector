
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlexoffersCollector extends SketchCollector {

    static CONFIG = {
        id: "flexoffers",
        name: "FlexOffers",
        description: "i18n.collectors.flexoffers.description",
        version: "0",
        website: "https://publisherpro.flexoffers.com/PaymentHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202981.jpg",
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
        loginUrl: "https://publisherpro.flexoffers.com/PaymentHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlexoffersCollector.CONFIG);
    }
}
