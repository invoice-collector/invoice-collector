
import { SketchCollector } from '../../sketchCollector';

export class MetroMarketsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "metro_markets_gmbh",
        name: "Metro Markets GmbH",
        description: "i18n.collectors.metro_markets_gmbh.description",
        version: "0",
        website: "https://www.metro.de/marktplatz/account/orders-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103748.jpg",
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
        entryUrl: "https://www.metro.de/marktplatz/account/orders-history",
    }

    constructor() {
        super(MetroMarketsGmbhCollector.CONFIG);
    }
}
