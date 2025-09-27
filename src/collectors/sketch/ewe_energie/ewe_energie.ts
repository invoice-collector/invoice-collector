
import { SketchCollector } from '../../sketchCollector';

export class EweEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "ewe_energie",
        name: "EWE Energie",
        description: "i18n.collectors.ewe_energie.description",
        version: "0",
        website: "https://meine.ewe.de/strom#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185159.jpg",
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
        entryUrl: "https://meine.ewe.de/strom#",
    }

    constructor() {
        super(EweEnergieCollector.CONFIG);
    }
}
