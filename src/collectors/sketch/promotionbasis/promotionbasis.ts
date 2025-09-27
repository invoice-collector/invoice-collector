
import { SketchCollector } from '../../sketchCollector';

export class PromotionbasisCollector extends SketchCollector {

    static CONFIG = {
        id: "promotionbasis",
        name: "Promotionbasis",
        description: "i18n.collectors.promotionbasis.description",
        version: "0",
        website: "https://www.promotionbasis.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11321.jpg",
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
        entryUrl: "https://www.promotionbasis.de/",
    }

    constructor() {
        super(PromotionbasisCollector.CONFIG);
    }
}
