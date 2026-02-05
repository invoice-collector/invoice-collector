
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsmtPreventionSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "asmt_prevention_sante",
        name: "ASMT Prevention Sante",
        description: "i18n.collectors.asmt_prevention_sante.description",
        version: "0",
        website: "https://portailasmt65.pulseprevention.com/Documents/Invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4480241.jpg",
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
        loginUrl: "https://portailasmt65.pulseprevention.com/Documents/Invoicing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AsmtPreventionSanteCollector.CONFIG);
    }
}
