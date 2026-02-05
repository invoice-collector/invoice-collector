
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreditAgricoleCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_agricole",
        name: "Credit Agricole",
        description: "i18n.collectors.credit_agricole.description",
        version: "0",
        website: "https://www.credit-agricole.fr/ca-anjou-maine/particulier/acceder-a-mes-comptes.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102330.jpg",
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
        loginUrl: "https://www.credit-agricole.fr/ca-anjou-maine/particulier/acceder-a-mes-comptes.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreditAgricoleCollector.CONFIG);
    }
}
