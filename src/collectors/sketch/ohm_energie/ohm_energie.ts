
import { SketchCollector } from '../../sketchCollector';

export class OhmEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "ohm_energie",
        name: "Ohm Energie",
        description: "i18n.collectors.ohm_energie.description",
        version: "0",
        website: "https://espace-client.ohm-energie.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2710652.jpg",
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
        entryUrl: "https://espace-client.ohm-energie.com/login",
    }

    constructor() {
        super(OhmEnergieCollector.CONFIG);
    }
}
