
import { SketchCollector } from '../../sketchCollector';

export class LeTraderCollector extends SketchCollector {

    static CONFIG = {
        id: "le_trader",
        name: "Le Trader",
        description: "i18n.collectors.le_trader.description",
        version: "0",
        website: "http://www.letrader.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121422.jpg",
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
        entryUrl: "http://www.letrader.fr/",
    }

    constructor() {
        super(LeTraderCollector.CONFIG);
    }
}
