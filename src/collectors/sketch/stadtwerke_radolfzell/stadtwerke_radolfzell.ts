
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeRadolfzellCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_radolfzell",
        name: "Stadtwerke Radolfzell",
        description: "i18n.collectors.stadtwerke_radolfzell.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-radolfzell.de/powercommerce/csit3/fo/portal/invoiceDetails",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2584143.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-radolfzell.de/powercommerce/csit3/fo/portal/invoiceDetails",
    }

    constructor() {
        super(StadtwerkeRadolfzellCollector.CONFIG);
    }
}
