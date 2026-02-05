
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChequeDejeunerCollector extends SketchCollector {

    static CONFIG = {
        id: "cheque_dejeuner",
        name: "Cheque Dejeuner",
        description: "i18n.collectors.cheque_dejeuner.description",
        version: "0",
        website: "https://clients.cheque-dejeuner.com/accueil/gerer/mes-factures-et-documents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185332.jpg",
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
        loginUrl: "https://clients.cheque-dejeuner.com/accueil/gerer/mes-factures-et-documents/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ChequeDejeunerCollector.CONFIG);
    }
}
