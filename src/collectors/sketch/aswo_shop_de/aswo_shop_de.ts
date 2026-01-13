
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AswoShopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "aswo_shop_de",
        name: "ASWO shop (.de)",
        description: "i18n.collectors.aswo_shop_de.description",
        version: "0",
        website: "https://shop.aswo.com/aswoShop/startPage.faces?storeId=599",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778915.jpg",
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
        loginUrl: "https://shop.aswo.com/aswoShop/startPage.faces?storeId=599",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AswoShopDeCollector.CONFIG);
    }
}
