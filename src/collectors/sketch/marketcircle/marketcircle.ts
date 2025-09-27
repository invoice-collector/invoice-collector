
import { SketchCollector } from '../../sketchCollector';

export class MarketcircleCollector extends SketchCollector {

    static CONFIG = {
        id: "marketcircle",
        name: "Marketcircle",
        description: "i18n.collectors.marketcircle.description",
        version: "0",
        website: "https://www.marketcircle.com/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50905.jpg",
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
        entryUrl: "https://www.marketcircle.com/account/subscription",
    }

    constructor() {
        super(MarketcircleCollector.CONFIG);
    }
}
