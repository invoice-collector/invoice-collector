
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Fliphtml5Collector extends SketchCollector {

    static CONFIG = {
        id: "fliphtml5",
        name: "FLIPHTML5",
        description: "i18n.collectors.fliphtml5.description",
        version: "0",
        website: "https://fliphtml5.com/de/center/billing/#Billing-Cycle",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727894.jpg",
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
        loginUrl: "https://fliphtml5.com/de/center/billing/#Billing-Cycle",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Fliphtml5Collector.CONFIG);
    }
}
