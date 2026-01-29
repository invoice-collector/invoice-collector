
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OfriCollector extends SketchCollector {

    static CONFIG = {
        id: "ofri",
        name: "Ofri",
        description: "i18n.collectors.ofri.description",
        version: "0",
        website: "https://www.ofri.ch/users/123580/account_balances",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189603.jpg",
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
        loginUrl: "https://www.ofri.ch/users/123580/account_balances",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OfriCollector.CONFIG);
    }
}
