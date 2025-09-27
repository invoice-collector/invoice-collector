
import { SketchCollector } from '../../sketchCollector';

export class VogelAutomobilIndustrieCollector extends SketchCollector {

    static CONFIG = {
        id: "vogel_automobil_industrie",
        name: "Vogel Automobil Industrie",
        description: "i18n.collectors.vogel_automobil_industrie.description",
        version: "0",
        website: "https://www.automobil-industrie.vogel.de/anmelden/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3126609.jpg",
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
        entryUrl: "https://www.automobil-industrie.vogel.de/anmelden/",
    }

    constructor() {
        super(VogelAutomobilIndustrieCollector.CONFIG);
    }
}
