
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdivinPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "adivin_partner",
        name: "Adivin Partner",
        description: "i18n.collectors.adivin_partner.description",
        version: "0",
        website: "https://partner.adivin.com/index.php?idi=es#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419775.jpg",
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
        loginUrl: "https://partner.adivin.com/index.php?idi=es#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdivinPartnerCollector.CONFIG);
    }
}
