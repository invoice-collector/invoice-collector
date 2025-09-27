
import { SketchCollector } from '../../sketchCollector';

export class SegenUkCollector extends SketchCollector {

    static CONFIG = {
        id: "segen_uk",
        name: "Segen UK",
        description: "i18n.collectors.segen_uk.description",
        version: "0",
        website: "https://portal.segen.co.uk/Reseller/Orders/RecentInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1519760.jpg",
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
        entryUrl: "https://portal.segen.co.uk/Reseller/Orders/RecentInvoices",
    }

    constructor() {
        super(SegenUkCollector.CONFIG);
    }
}
