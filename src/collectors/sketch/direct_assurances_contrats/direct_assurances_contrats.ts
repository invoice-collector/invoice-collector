
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DirectAssurancesContratsCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_assurances_contrats",
        name: "Direct Assurances (contrats)",
        description: "i18n.collectors.direct_assurances_contrats.description",
        version: "0",
        website: "https://www.direct-assurance.fr/Sales/QBQQ2B7Q/Common/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105878.jpg",
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
        loginUrl: "https://www.direct-assurance.fr/Sales/QBQQ2B7Q/Common/Login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DirectAssurancesContratsCollector.CONFIG);
    }
}
