
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnapaddyCollector extends SketchCollector {

    static CONFIG = {
        id: "snapaddy",
        name: "snapADDY",
        description: "i18n.collectors.snapaddy.description",
        version: "0",
        website: "https://app.snapaddy.com/login?redirect_url=%252F%253Flocale%253Den",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18545.jpg",
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
        loginUrl: "https://app.snapaddy.com/login?redirect_url=%252F%253Flocale%253Den",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SnapaddyCollector.CONFIG);
    }
}
