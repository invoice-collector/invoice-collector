
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasybellPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "easybell_partner",
        name: "Easybell Partner",
        description: "i18n.collectors.easybell_partner.description",
        version: "0",
        website: "https://partner.easybell.de/provisioning",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517015.jpg",
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
        loginUrl: "https://partner.easybell.de/provisioning",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasybellPartnerCollector.CONFIG);
    }
}
