
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PasHammerlCollector extends SketchCollector {

    static CONFIG = {
        id: "pas_hammerl",
        name: "pas-hammerl",
        description: "i18n.collectors.pas_hammerl.description",
        version: "0",
        website: "https://login.pas-hammerl.de/kundencenter/postbox/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158368.jpg",
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
        loginUrl: "https://login.pas-hammerl.de/kundencenter/postbox/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PasHammerlCollector.CONFIG);
    }
}
