
import { SketchCollector } from '../../sketchCollector';

export class GarantGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "garant_gruppe",
        name: "GARANT-GRUPPE",
        description: "i18n.collectors.garant_gruppe.description",
        version: "0",
        website: "https://www.mygmeasy.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/944051.jpg",
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
        entryUrl: "https://www.mygmeasy.de/",
    }

    constructor() {
        super(GarantGruppeCollector.CONFIG);
    }
}
