
import { SketchCollector } from '../../sketchCollector';

export class EinhundertEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "einhundert_energie",
        name: "Einhundert Energie",
        description: "i18n.collectors.einhundert_energie.description",
        version: "0",
        website: "https://portal.einhundert-energie.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985680.jpg",
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
        entryUrl: "https://portal.einhundert-energie.de/invoices",
    }

    constructor() {
        super(EinhundertEnergieCollector.CONFIG);
    }
}
