
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeakyPaywallCollector extends SketchCollector {

    static CONFIG = {
        id: "leaky_paywall",
        name: "Leaky Paywall",
        description: "i18n.collectors.leaky_paywall.description",
        version: "0",
        website: "https://leakypaywall.com/my-account/#tabs-1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439001.jpg",
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
        loginUrl: "https://leakypaywall.com/my-account/#tabs-1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LeakyPaywallCollector.CONFIG);
    }
}
