
import { SketchCollector } from '../../sketchCollector';

export class LeBonCoinCollector extends SketchCollector {

    static CONFIG = {
        id: "le_bon_coin",
        name: "Le Bon Coin",
        description: "i18n.collectors.le_bon_coin.description",
        version: "0",
        website: "https://www.leboncoin.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/395892.jpg",
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
        entryUrl: "https://www.leboncoin.fr/",
    }

    constructor() {
        super(LeBonCoinCollector.CONFIG);
    }
}
