
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LEauBordeauxMetropoleProfessionnelsCollector extends SketchCollector {

    static CONFIG = {
        id: "l_eau_bordeaux_metropole_professionnels",
        name: "L\'eau Bordeaux Metropole Professionnels",
        description: "i18n.collectors.l_eau_bordeaux_metropole_professionnels.description",
        version: "0",
        website: "https://moncompte.leaubordeauxmetropole.fr/#/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4447106.jpg",
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
        entryUrl: "https://moncompte.leaubordeauxmetropole.fr/#/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LEauBordeauxMetropoleProfessionnelsCollector.CONFIG);
    }
}
