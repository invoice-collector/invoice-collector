
import { SketchCollector } from '../../sketchCollector';

export class BackMarketDeCollector extends SketchCollector {

    static CONFIG = {
        id: "back_market_de",
        name: "Back Market (.de)",
        description: "i18n.collectors.back_market_de.description",
        version: "0",
        website: "https://www.backmarket.de/dashboard/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/758737.jpg",
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
        entryUrl: "https://www.backmarket.de/dashboard/orders",
    }

    constructor() {
        super(BackMarketDeCollector.CONFIG);
    }
}
