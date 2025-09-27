
import { SketchCollector } from '../../sketchCollector';

export class EWaRissCollector extends SketchCollector {

    static CONFIG = {
        id: "e_wa_riss",
        name: "e.wa Riss",
        description: "i18n.collectors.e_wa_riss.description",
        version: "0",
        website: "https://kundenportal.ewa-riss.de/bkp/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645353.jpg",
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
        entryUrl: "https://kundenportal.ewa-riss.de/bkp/rechnungen",
    }

    constructor() {
        super(EWaRissCollector.CONFIG);
    }
}
