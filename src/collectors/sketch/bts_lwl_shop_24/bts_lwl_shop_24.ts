
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BtsLwlShop24Collector extends SketchCollector {

    static CONFIG = {
        id: "bts_lwl_shop_24",
        name: "BTS  - LWL Shop 24",
        description: "i18n.collectors.bts_lwl_shop_24.description",
        version: "0",
        website: "https://www.lwl-shop24.de/belegarchiv/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732519.jpg",
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
        loginUrl: "https://www.lwl-shop24.de/belegarchiv/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BtsLwlShop24Collector.CONFIG);
    }
}
