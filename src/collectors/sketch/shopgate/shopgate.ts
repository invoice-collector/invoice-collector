
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShopgateCollector extends SketchCollector {

    static CONFIG = {
        id: "shopgate",
        name: "Shopgate",
        description: "i18n.collectors.shopgate.description",
        version: "0",
        website: "https://admin.shopgate.com/DE/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32507.jpg",
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
        entryUrl: "https://admin.shopgate.com/DE/users/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShopgateCollector.CONFIG);
    }
}
