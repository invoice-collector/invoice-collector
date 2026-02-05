
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShopeeCollector extends SketchCollector {

    static CONFIG = {
        id: "shopee",
        name: "Shopee",
        description: "i18n.collectors.shopee.description",
        version: "0",
        website: "https://shopee.com.my/user/purchase?type=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2715379.jpg",
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
        loginUrl: "https://shopee.com.my/user/purchase?type=3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ShopeeCollector.CONFIG);
    }
}
