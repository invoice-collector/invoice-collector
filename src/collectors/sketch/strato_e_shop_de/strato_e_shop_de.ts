
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StratoEShopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "strato_e_shop_de",
        name: "Strato e-shop(de)",
        description: "i18n.collectors.strato_e_shop_de.description",
        version: "0",
        website: "https://shop.strato.de/epages/de.login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770957.jpg",
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
        loginUrl: "https://shop.strato.de/epages/de.login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StratoEShopDeCollector.CONFIG);
    }
}
