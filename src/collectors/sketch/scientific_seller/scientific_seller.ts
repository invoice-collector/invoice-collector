
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScientificSellerCollector extends SketchCollector {

    static CONFIG = {
        id: "scientific_seller",
        name: "Scientific Seller",
        description: "i18n.collectors.scientific_seller.description",
        version: "0",
        website: "https://www.scientificseller.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19519.jpg",
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
        loginUrl: "https://www.scientificseller.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScientificSellerCollector.CONFIG);
    }
}
