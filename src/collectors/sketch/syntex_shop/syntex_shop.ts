
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SyntexShopCollector extends SketchCollector {

    static CONFIG = {
        id: "syntex_shop",
        name: "syntex Shop",
        description: "i18n.collectors.syntex_shop.description",
        version: "0",
        website: "https://www.syntexshop.de/eshop/loginform",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2859121.jpg",
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
        loginUrl: "https://www.syntexshop.de/eshop/loginform",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SyntexShopCollector.CONFIG);
    }
}
