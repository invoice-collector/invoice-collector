
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CreditMutuelLeasingFrCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_mutuel_leasing_fr",
        name: "Credit Mutuel Leasing(fr)",
        description: "i18n.collectors.credit_mutuel_leasing_fr.description",
        version: "0",
        website: "https://www.creditmutuel-leasing.fr/fr/identification/authentification.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115230.jpg",
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
        entryUrl: "https://www.creditmutuel-leasing.fr/fr/identification/authentification.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CreditMutuelLeasingFrCollector.CONFIG);
    }
}
