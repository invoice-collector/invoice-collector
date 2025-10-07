
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdfEntrepriseGuyaneCollector extends SketchCollector {

    static CONFIG = {
        id: "edf_entreprise_guyane",
        name: "EDF Guyane",
        description: "i18n.collectors.edf_entreprise_guyane.description",
        version: "0",
        website: "https://sei-ael-guyane.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
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
        entryUrl: "https://sei-ael-guyane.edf.com/aelEDF/jsp/arc/habilitation/acteur.ZoomerDossierClient.go",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdfEntrepriseGuyaneCollector.CONFIG);
    }
}
