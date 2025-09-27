
import { SketchCollector } from '../../sketchCollector';

export class VerisureMypagesCollector extends SketchCollector {

    static CONFIG = {
        id: "verisure_mypages",
        name: "Verisure MyPages",
        description: "i18n.collectors.verisure_mypages.description",
        version: "0",
        website: "https://mypages.verisure.com/de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1668496.jpg",
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
        entryUrl: "https://mypages.verisure.com/de/invoices",
    }

    constructor() {
        super(VerisureMypagesCollector.CONFIG);
    }
}
