
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MobilepartsShopCollector extends SketchCollector {

    static CONFIG = {
        id: "mobileparts_shop",
        name: "Mobileparts.shop",
        description: "i18n.collectors.mobileparts_shop.description",
        version: "0",
        website: "https://www.mobileparts.shop/de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33377.jpg",
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
        entryUrl: "https://www.mobileparts.shop/de/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MobilepartsShopCollector.CONFIG);
    }
}
