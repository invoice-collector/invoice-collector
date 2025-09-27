
import { SketchCollector } from '../../sketchCollector';

export class SpeeklyCollector extends SketchCollector {

    static CONFIG = {
        id: "speekly",
        name: "Speekly",
        description: "i18n.collectors.speekly.description",
        version: "0",
        website: "https://speekly.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801082.jpg",
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
        entryUrl: "https://speekly.de/invoices",
    }

    constructor() {
        super(SpeeklyCollector.CONFIG);
    }
}
