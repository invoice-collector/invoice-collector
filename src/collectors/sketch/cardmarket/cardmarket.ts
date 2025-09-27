
import { SketchCollector } from '../../sketchCollector';

export class CardmarketCollector extends SketchCollector {

    static CONFIG = {
        id: "cardmarket",
        name: "Cardmarket",
        description: "i18n.collectors.cardmarket.description",
        version: "0",
        website: "https://www.cardmarket.com/en/Magic/Account/Finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863346.jpg",
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
        entryUrl: "https://www.cardmarket.com/en/Magic/Account/Finance",
    }

    constructor() {
        super(CardmarketCollector.CONFIG);
    }
}
