
import { SketchCollector } from '../../sketchCollector';

export class MolkereiRuckerCollector extends SketchCollector {

    static CONFIG = {
        id: "molkerei_rucker",
        name: "Molkerei Rucker",
        description: "i18n.collectors.molkerei_rucker.description",
        version: "0",
        website: "https://aur.milcherzeuger.info/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3062210.jpg",
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
        entryUrl: "https://aur.milcherzeuger.info/anmelden",
    }

    constructor() {
        super(MolkereiRuckerCollector.CONFIG);
    }
}
