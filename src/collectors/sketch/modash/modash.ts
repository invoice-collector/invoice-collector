
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ModashCollector extends SketchCollector {

    static CONFIG = {
        id: "modash",
        name: "Modash",
        description: "i18n.collectors.modash.description",
        version: "0",
        website: "https://marketer.modash.io/billing/plan-details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654788.jpg",
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
        loginUrl: "https://marketer.modash.io/billing/plan-details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ModashCollector.CONFIG);
    }
}
