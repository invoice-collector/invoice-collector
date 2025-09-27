
import { SketchCollector } from '../../sketchCollector';

export class PayhawkCollector extends SketchCollector {

    static CONFIG = {
        id: "payhawk",
        name: "Payhawk",
        description: "i18n.collectors.payhawk.description",
        version: "0",
        website: "https://portal.payhawk.com/?account=dkn_immobilien_inh_steven_dekan_892c0a06",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778195.jpg",
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
        entryUrl: "https://portal.payhawk.com/?account=dkn_immobilien_inh_steven_dekan_892c0a06",
    }

    constructor() {
        super(PayhawkCollector.CONFIG);
    }
}
