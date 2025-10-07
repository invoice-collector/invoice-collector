
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WurthOnlineShopCollector extends SketchCollector {

    static CONFIG = {
        id: "wurth_online_shop",
        name: "Wurth Online-Shop",
        description: "i18n.collectors.wurth_online_shop.description",
        version: "0",
        website: "https://eshop.wuerth.de/de/DE/EUR/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26542.jpg",
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
        entryUrl: "https://eshop.wuerth.de/de/DE/EUR/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WurthOnlineShopCollector.CONFIG);
    }
}
