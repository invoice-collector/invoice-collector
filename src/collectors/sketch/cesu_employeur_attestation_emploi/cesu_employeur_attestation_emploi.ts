
import { SketchCollector } from '../../sketchCollector';

export class CesuEmployeurAttestationEmploiCollector extends SketchCollector {

    static CONFIG = {
        id: "cesu_employeur_attestation_emploi",
        name: "CESU Employeur - Attestation emploi",
        description: "i18n.collectors.cesu_employeur_attestation_emploi.description",
        version: "0",
        website: "https://www.cesu.urssaf.fr/info/accueil/creer-mon-compte.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105784.jpg",
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
        entryUrl: "https://www.cesu.urssaf.fr/info/accueil/creer-mon-compte.html",
    }

    constructor() {
        super(CesuEmployeurAttestationEmploiCollector.CONFIG);
    }
}
