
import { SketchCollector } from '../../sketchCollector';

export class SlingCollector extends SketchCollector {

    static CONFIG = {
        id: "sling",
        name: "SLING",
        description: "i18n.collectors.sling.description",
        version: "0",
        website: "https://app.getsling.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172314.jpg",
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
        entryUrl: "https://app.getsling.com/account/invoices",
    }

    constructor() {
        super(SlingCollector.CONFIG);
    }
}
