
import { SketchCollector } from '../../sketchCollector';

export class ProfitWhalesCollector extends SketchCollector {

    static CONFIG = {
        id: "profit_whales",
        name: "Profit Whales",
        description: "i18n.collectors.profit_whales.description",
        version: "0",
        website: "https://app.profitwhales.com/account/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105973.jpg",
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
        entryUrl: "https://app.profitwhales.com/account/billing-history",
    }

    constructor() {
        super(ProfitWhalesCollector.CONFIG);
    }
}
