
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HagelShopCollector extends SketchCollector {

    static CONFIG = {
        id: "hagel_shop",
        name: "Hagel-Shop",
        description: "i18n.collectors.hagel_shop.description",
        version: "0",
        website: "https://www.hagel-shop.de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64997.jpg",
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
        entryUrl: "https://www.hagel-shop.de/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HagelShopCollector.CONFIG);
    }
}
