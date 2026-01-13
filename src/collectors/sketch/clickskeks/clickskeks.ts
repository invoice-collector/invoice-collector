
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClickskeksCollector extends SketchCollector {

    static CONFIG = {
        id: "clickskeks",
        name: "Clickskeks",
        description: "i18n.collectors.clickskeks.description",
        version: "0",
        website: "https://mein.clickskeks.at/domains",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220338.jpg",
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
        loginUrl: "https://mein.clickskeks.at/domains",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClickskeksCollector.CONFIG);
    }
}
