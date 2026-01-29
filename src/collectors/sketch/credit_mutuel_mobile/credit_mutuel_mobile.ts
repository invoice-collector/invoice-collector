
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreditMutuelMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_mutuel_mobile",
        name: "Credit Mutuel Mobile",
        description: "i18n.collectors.credit_mutuel_mobile.description",
        version: "0",
        website: "https://www.creditmutuel.fr/fr/authentification.html?utm_source=sitecmpros&utm_medium=redirection",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135338.jpg",
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
        loginUrl: "https://www.creditmutuel.fr/fr/authentification.html?utm_source=sitecmpros&utm_medium=redirection",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreditMutuelMobileCollector.CONFIG);
    }
}
