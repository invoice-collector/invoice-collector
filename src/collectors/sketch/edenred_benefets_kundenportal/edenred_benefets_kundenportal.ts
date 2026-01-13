
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdenredBenefetsKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred_benefets_kundenportal",
        name: "Edenred Benefets Kundenportal",
        description: "i18n.collectors.edenred_benefets_kundenportal.description",
        version: "0",
        website: "https://kunde.edenred.de/page/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417537.jpg",
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
        loginUrl: "https://kunde.edenred.de/page/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdenredBenefetsKundenportalCollector.CONFIG);
    }
}
