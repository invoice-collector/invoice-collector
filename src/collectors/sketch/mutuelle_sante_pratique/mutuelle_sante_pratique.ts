
import { SketchCollector } from '../../sketchCollector';

export class MutuelleSantePratiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_sante_pratique",
        name: "Mutuelle Sante Pratique",
        description: "i18n.collectors.mutuelle_sante_pratique.description",
        version: "0",
        website: "http://www.mon-compte-en-ligne.fr/mon-compte-sante-pratique/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131094.jpg",
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
        entryUrl: "http://www.mon-compte-en-ligne.fr/mon-compte-sante-pratique/",
    }

    constructor() {
        super(MutuelleSantePratiqueCollector.CONFIG);
    }
}
