
import { SketchCollector } from '../../sketchCollector';

export class RoastmarketCollector extends SketchCollector {

    static CONFIG = {
        id: "roastmarket",
        name: "Roastmarket",
        description: "i18n.collectors.roastmarket.description",
        version: "0",
        website: "https://www.roastmarket.de/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37391.jpg",
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
        entryUrl: "https://www.roastmarket.de/customer/login",
    }

    constructor() {
        super(RoastmarketCollector.CONFIG);
    }
}
