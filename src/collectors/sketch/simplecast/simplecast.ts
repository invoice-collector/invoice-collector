
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimplecastCollector extends SketchCollector {

    static CONFIG = {
        id: "simplecast",
        name: "Simplecast",
        description: "i18n.collectors.simplecast.description",
        version: "0",
        website: "https://dashboard.simplecast.com/accounts/f3c3379a-5720-459f-8760-1926cbc50719/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799169.jpg",
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
        loginUrl: "https://dashboard.simplecast.com/accounts/f3c3379a-5720-459f-8760-1926cbc50719/billing/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimplecastCollector.CONFIG);
    }
}
