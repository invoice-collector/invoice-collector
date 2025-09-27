
import { SketchCollector } from '../../sketchCollector';

export class SynalabsCollector extends SketchCollector {

    static CONFIG = {
        id: "synalabs",
        name: "SYNALABS",
        description: "i18n.collectors.synalabs.description",
        version: "0",
        website: "https://www.synalabs.com/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519912.jpg",
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
        entryUrl: "https://www.synalabs.com/clientarea.php?action=invoices",
    }

    constructor() {
        super(SynalabsCollector.CONFIG);
    }
}
