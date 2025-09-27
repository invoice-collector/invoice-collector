
import { SketchCollector } from '../../sketchCollector';

export class BigbuyCollector extends SketchCollector {

    static CONFIG = {
        id: "bigbuy",
        name: "BigBuy",
        description: "i18n.collectors.bigbuy.description",
        version: "0",
        website: "https://www.bigbuy.eu/de/controlpanel/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18461.jpg",
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
        entryUrl: "https://www.bigbuy.eu/de/controlpanel/invoice",
    }

    constructor() {
        super(BigbuyCollector.CONFIG);
    }
}
