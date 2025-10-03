
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CartouchesEnStockCollector extends SketchCollector {

    static CONFIG = {
        id: "cartouches_en_stock",
        name: "Cartouches en stock",
        description: "i18n.collectors.cartouches_en_stock.description",
        version: "0",
        website: "https://www.cartouches-en-stock.fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117754.jpg",
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
        entryUrl: "https://www.cartouches-en-stock.fr/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CartouchesEnStockCollector.CONFIG);
    }
}
