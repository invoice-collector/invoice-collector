
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppSmartCollector extends SketchCollector {

    static CONFIG = {
        id: "app_smart",
        name: "App-Smart",
        description: "i18n.collectors.app_smart.description",
        version: "0",
        website: "https://delivery-app.app-smart.services/cloudlogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222566.jpg",
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
        loginUrl: "https://delivery-app.app-smart.services/cloudlogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AppSmartCollector.CONFIG);
    }
}
