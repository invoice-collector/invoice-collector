
import { SketchCollector } from '../../sketchCollector';

export class EauPubliqueEstEnsembleCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_publique_est_ensemble",
        name: "Eau Publique Est Ensemble",
        description: "i18n.collectors.eau_publique_est_ensemble.description",
        version: "0",
        website: "https://eau-potable.est-ensemble.fr/#/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4650436.jpg",
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
        entryUrl: "https://eau-potable.est-ensemble.fr/#/facture",
    }

    constructor() {
        super(EauPubliqueEstEnsembleCollector.CONFIG);
    }
}
