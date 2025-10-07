
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CreditMutuelCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_mutuel",
        name: "Credit Mutuel",
        description: "i18n.collectors.credit_mutuel.description",
        version: "0",
        website: "https://www.creditmutuel.fr/fr/authentification.html?utm_source=sitecmpros&utm_medium=redirection",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115744.jpg",
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
        entryUrl: "https://www.creditmutuel.fr/fr/authentification.html?utm_source=sitecmpros&utm_medium=redirection",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CreditMutuelCollector.CONFIG);
    }
}
