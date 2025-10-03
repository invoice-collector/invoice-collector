
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CreditMutuelCicEpargneSalarialeCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_mutuel_cic_epargne_salariale",
        name: "Credit Mutuel - CIC (Epargne salariale)",
        description: "i18n.collectors.credit_mutuel_cic_epargne_salariale.description",
        version: "0",
        website: "https://www.creditmutuel-epargnesalariale.fr/espace-client/fr/identification/authentification.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115991.jpg",
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
        entryUrl: "https://www.creditmutuel-epargnesalariale.fr/espace-client/fr/identification/authentification.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CreditMutuelCicEpargneSalarialeCollector.CONFIG);
    }
}
