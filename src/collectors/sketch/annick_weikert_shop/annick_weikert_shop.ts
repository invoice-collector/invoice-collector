
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AnnickWeikertShopCollector extends SketchCollector {

    static CONFIG = {
        id: "annick_weikert_shop",
        name: "Annick Weikert - Shop",
        description: "i18n.collectors.annick_weikert_shop.description",
        version: "0",
        website: "https://shop.annickweikert.de/customer/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2796754.jpg",
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
        loginUrl: "https://shop.annickweikert.de/customer/payments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnnickWeikertShopCollector.CONFIG);
    }
}
