
import { SketchCollector } from '../../sketchCollector';

export class NocrmCollector extends SketchCollector {

    static CONFIG = {
        id: "nocrm",
        name: "noCRM",
        description: "i18n.collectors.nocrm.description",
        version: "0",
        website: "https://digitalanders.nocrm.io/admin/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765219.jpg",
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
        entryUrl: "https://digitalanders.nocrm.io/admin/invoices",
    }

    constructor() {
        super(NocrmCollector.CONFIG);
    }
}
