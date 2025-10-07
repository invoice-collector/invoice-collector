
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OegOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "oeg_online_shop",
        name: "OEG Online Shop",
        description: "i18n.collectors.oeg_online_shop.description",
        version: "0",
        website: "https://www.oeg.net/de/account/order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82333.jpg",
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
        entryUrl: "https://www.oeg.net/de/account/order/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OegOnlineShopCollector.CONFIG);
    }
}
