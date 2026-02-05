
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EkoBLgariiaEadCollector extends SketchCollector {

    static CONFIG = {
        id: "eko_b_lgariia_ead",
        name: "Eko B'lgariia EAD",
        description: "i18n.collectors.eko_b_lgariia_ead.description",
        version: "0",
        website: "https://invoice.eko.bg/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252929.jpg",
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
        loginUrl: "https://invoice.eko.bg/#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EkoBLgariiaEadCollector.CONFIG);
    }
}
