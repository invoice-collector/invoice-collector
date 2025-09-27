
import { SketchCollector } from '../../sketchCollector';

export class MartignettiExchangeCollector extends SketchCollector {

    static CONFIG = {
        id: "martignetti_exchange",
        name: "Martignetti Exchange",
        description: "i18n.collectors.martignetti_exchange.description",
        version: "0",
        website: "https://martignettiexchange.com/profile/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387617.jpg",
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
        entryUrl: "https://martignettiexchange.com/profile/login",
    }

    constructor() {
        super(MartignettiExchangeCollector.CONFIG);
    }
}
