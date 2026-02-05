
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NeonTechCollector extends SketchCollector {

    static CONFIG = {
        id: "neon_tech",
        name: "Neon tech",
        description: "i18n.collectors.neon_tech.description",
        version: "0",
        website: "https://console.neon.tech/app/billing#payment_info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206478.jpg",
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
        loginUrl: "https://console.neon.tech/app/billing#payment_info",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NeonTechCollector.CONFIG);
    }
}
