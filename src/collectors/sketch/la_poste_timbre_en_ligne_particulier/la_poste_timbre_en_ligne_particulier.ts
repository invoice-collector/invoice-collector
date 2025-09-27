
import { SketchCollector } from '../../sketchCollector';

export class LaPosteTimbreEnLigneParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_timbre_en_ligne_particulier",
        name: "La poste (timbre en ligne) - particulier",
        description: "i18n.collectors.la_poste_timbre_en_ligne_particulier.description",
        version: "0",
        website: "https://www.laposte.fr/mon-timbre-en-ligne",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107055.jpg",
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
        entryUrl: "https://www.laposte.fr/mon-timbre-en-ligne",
    }

    constructor() {
        super(LaPosteTimbreEnLigneParticulierCollector.CONFIG);
    }
}
