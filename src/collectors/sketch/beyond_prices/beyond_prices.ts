
import { SketchCollector } from '../../sketchCollector';

export class BeyondPricesCollector extends SketchCollector {

    static CONFIG = {
        id: "beyond_prices",
        name: "Beyond Prices",
        description: "i18n.collectors.beyond_prices.description",
        version: "0",
        website: "https://v2.beyondpricing.com/dashboard/user/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1476016.jpg",
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
        entryUrl: "https://v2.beyondpricing.com/dashboard/user/statements",
    }

    constructor() {
        super(BeyondPricesCollector.CONFIG);
    }
}
