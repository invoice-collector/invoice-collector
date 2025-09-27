
import { SketchCollector } from '../../sketchCollector';

export class ThePioneerCollector extends SketchCollector {

    static CONFIG = {
        id: "the_pioneer",
        name: "The Pioneer",
        description: "i18n.collectors.the_pioneer.description",
        version: "0",
        website: "https://www.thepioneer.de/account/membership/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284743.jpg",
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
        entryUrl: "https://www.thepioneer.de/account/membership/invoices",
    }

    constructor() {
        super(ThePioneerCollector.CONFIG);
    }
}
