
import { SketchCollector } from '../../sketchCollector';

export class TrustamiCollector extends SketchCollector {

    static CONFIG = {
        id: "trustami",
        name: "Trustami",
        description: "i18n.collectors.trustami.description",
        version: "0",
        website: "https://app.trustami.com/signin/www/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25487.jpg",
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
        entryUrl: "https://app.trustami.com/signin/www/de",
    }

    constructor() {
        super(TrustamiCollector.CONFIG);
    }
}
