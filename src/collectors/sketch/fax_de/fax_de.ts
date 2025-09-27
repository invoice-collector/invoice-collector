
import { SketchCollector } from '../../sketchCollector';

export class FaxDeCollector extends SketchCollector {

    static CONFIG = {
        id: "fax_de",
        name: "fax.de",
        description: "i18n.collectors.fax_de.description",
        version: "0",
        website: "https://www.fax.de/center/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7904.jpg",
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
        entryUrl: "https://www.fax.de/center/invoices",
    }

    constructor() {
        super(FaxDeCollector.CONFIG);
    }
}
