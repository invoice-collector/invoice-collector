
import { SketchCollector } from '../../sketchCollector';

export class SnelstartCollector extends SketchCollector {

    static CONFIG = {
        id: "snelstart",
        name: "snelstart",
        description: "i18n.collectors.snelstart.description",
        version: "0",
        website: "https://web.snelstart.nl/04b3cb89-79ad-44ae-b291-df5e389a191a/account/invoicedetails",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779703.jpg",
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
        entryUrl: "https://web.snelstart.nl/04b3cb89-79ad-44ae-b291-df5e389a191a/account/invoicedetails",
    }

    constructor() {
        super(SnelstartCollector.CONFIG);
    }
}
