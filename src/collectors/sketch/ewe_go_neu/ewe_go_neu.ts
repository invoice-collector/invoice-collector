
import { SketchCollector } from '../../sketchCollector';

export class EweGoNeuCollector extends SketchCollector {

    static CONFIG = {
        id: "ewe_go_neu",
        name: "EWE Go NEU",
        description: "i18n.collectors.ewe_go_neu.description",
        version: "0",
        website: "https://portal.ewe-go.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155380.jpg",
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
        entryUrl: "https://portal.ewe-go.de/login",
    }

    constructor() {
        super(EweGoNeuCollector.CONFIG);
    }
}
