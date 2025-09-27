
import { SketchCollector } from '../../sketchCollector';

export class ProductHeroCollector extends SketchCollector {

    static CONFIG = {
        id: "product_hero",
        name: "Product Hero",
        description: "i18n.collectors.product_hero.description",
        version: "0",
        website: "https://v2.app.producthero.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2486096.jpg",
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
        entryUrl: "https://v2.app.producthero.com/settings/invoices",
    }

    constructor() {
        super(ProductHeroCollector.CONFIG);
    }
}
