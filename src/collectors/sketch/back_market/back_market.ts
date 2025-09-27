
import { SketchCollector } from '../../sketchCollector';

export class BackMarketCollector extends SketchCollector {

    static CONFIG = {
        id: "back_market",
        name: "Back Market",
        description: "i18n.collectors.back_market.description",
        version: "0",
        website: "https://www.backmarket.fr/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59713.jpg",
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
        entryUrl: "https://www.backmarket.fr/dashboard",
    }

    constructor() {
        super(BackMarketCollector.CONFIG);
    }
}
