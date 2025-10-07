
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlesiaMutuelleParticulierCentreDeGestionDeLyonCollector extends SketchCollector {

    static CONFIG = {
        id: "klesia_mutuelle_particulier_centre_de_gestion_de_lyon",
        name: "Klesia - Mutuelle - Particulier (centre de gestion de Lyon)",
        description: "i18n.collectors.klesia_mutuelle_particulier_centre_de_gestion_de_lyon.description",
        version: "0",
        website: "https://www.klesia.fr/accedez-votre-espace-client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125677.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.klesia.fr/accedez-votre-espace-client",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlesiaMutuelleParticulierCentreDeGestionDeLyonCollector.CONFIG);
    }
}
