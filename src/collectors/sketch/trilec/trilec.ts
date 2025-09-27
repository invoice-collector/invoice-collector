
import { SketchCollector } from '../../sketchCollector';

export class TrilecCollector extends SketchCollector {

    static CONFIG = {
        id: "trilec",
        name: "Trilec",
        description: "i18n.collectors.trilec.description",
        version: "0",
        website: "https://www.triconnect.be/nl/Accountancy/InvoiceOverview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226686.jpg",
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
        entryUrl: "https://www.triconnect.be/nl/Accountancy/InvoiceOverview",
    }

    constructor() {
        super(TrilecCollector.CONFIG);
    }
}
