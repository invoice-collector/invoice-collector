
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WurthOnlineShopAtCollector extends SketchCollector {

    static CONFIG = {
        id: "wurth_online_shop_at",
        name: "Wurth Online-Shop AT",
        description: "i18n.collectors.wurth_online_shop_at.description",
        version: "0",
        website: "https://eshop.wuerth.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2308459.jpg",
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
        entryUrl: "https://eshop.wuerth.at",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WurthOnlineShopAtCollector.CONFIG);
    }
}
