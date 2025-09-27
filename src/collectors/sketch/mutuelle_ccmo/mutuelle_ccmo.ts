
import { SketchCollector } from '../../sketchCollector';

export class MutuelleCcmoCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_ccmo",
        name: "Mutuelle CCMO",
        description: "i18n.collectors.mutuelle_ccmo.description",
        version: "0",
        website: "https://espace-adherent.ccmo.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127685.jpg",
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
        entryUrl: "https://espace-adherent.ccmo.fr/login#/",
    }

    constructor() {
        super(MutuelleCcmoCollector.CONFIG);
    }
}
