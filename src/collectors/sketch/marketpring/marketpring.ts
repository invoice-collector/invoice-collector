
import { SketchCollector } from '../../sketchCollector';

export class MarketpringCollector extends SketchCollector {

    static CONFIG = {
        id: "marketpring",
        name: "MarketPring",
        description: "i18n.collectors.marketpring.description",
        version: "0",
        website: "https://app.marketprint.de/api/invoice/5044959543562",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1293769.jpg",
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
        entryUrl: "https://app.marketprint.de/api/invoice/5044959543562",
    }

    constructor() {
        super(MarketpringCollector.CONFIG);
    }
}
