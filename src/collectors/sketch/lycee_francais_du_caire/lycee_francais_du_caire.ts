
import { SketchCollector } from '../../sketchCollector';

export class LyceeFrancaisDuCaireCollector extends SketchCollector {

    static CONFIG = {
        id: "lycee_francais_du_caire",
        name: "Lycee Francais du Caire",
        description: "i18n.collectors.lycee_francais_du_caire.description",
        version: "0",
        website: "https://lfcaire.org/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107063.jpg",
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
        entryUrl: "https://lfcaire.org/",
    }

    constructor() {
        super(LyceeFrancaisDuCaireCollector.CONFIG);
    }
}
