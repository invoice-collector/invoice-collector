
import { SketchCollector } from '../../sketchCollector';

export class SwbTelekommunikationCollector extends SketchCollector {

    static CONFIG = {
        id: "swb_telekommunikation",
        name: "swb Telekommunikation",
        description: "i18n.collectors.swb_telekommunikation.description",
        version: "0",
        website: "https://mein.swb-gruppe.de/nordcomcss/secure/billingOverview.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618865.jpg",
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
        entryUrl: "https://mein.swb-gruppe.de/nordcomcss/secure/billingOverview.xhtml",
    }

    constructor() {
        super(SwbTelekommunikationCollector.CONFIG);
    }
}
