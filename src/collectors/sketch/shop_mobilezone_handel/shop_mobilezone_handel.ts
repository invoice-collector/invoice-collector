
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShopMobilezoneHandelCollector extends SketchCollector {

    static CONFIG = {
        id: "shop_mobilezone_handel",
        name: "Shop Mobilezone Handel",
        description: "i18n.collectors.shop_mobilezone_handel.description",
        version: "0",
        website: "https://shop.mobilezone-handel.de/account#documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1226957.jpg",
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
        entryUrl: "https://shop.mobilezone-handel.de/account#documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShopMobilezoneHandelCollector.CONFIG);
    }
}
