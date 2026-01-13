
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WestfalenHubCollector extends SketchCollector {

    static CONFIG = {
        id: "westfalen_hub",
        name: "Westfalen Hub",
        description: "i18n.collectors.westfalen_hub.description",
        version: "0",
        website: "https://hub.westfalen.com/wcc-management",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2787558.jpg",
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
        loginUrl: "https://hub.westfalen.com/wcc-management",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WestfalenHubCollector.CONFIG);
    }
}
