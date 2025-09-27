
import { SketchCollector } from '../../sketchCollector';

export class EdfEntrepriseGuadeloupeCollector extends SketchCollector {

    static CONFIG = {
        id: "edf_entreprise_guadeloupe",
        name: "EDF Entreprise - Guadeloupe",
        description: "i18n.collectors.edf_entreprise_guadeloupe.description",
        version: "0",
        website: "https://sei-ael-guadeloupe.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3115872.jpg",
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
        entryUrl: "https://sei-ael-guadeloupe.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
    }

    constructor() {
        super(EdfEntrepriseGuadeloupeCollector.CONFIG);
    }
}
