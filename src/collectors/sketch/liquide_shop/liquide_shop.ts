
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LiquideShopCollector extends SketchCollector {

    static CONFIG = {
        id: "liquide_shop",
        name: "Liquide Shop",
        description: "i18n.collectors.liquide_shop.description",
        version: "0",
        website: "https://e-liquide-shop.com/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120815.jpg",
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
        entryUrl: "https://e-liquide-shop.com/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LiquideShopCollector.CONFIG);
    }
}
