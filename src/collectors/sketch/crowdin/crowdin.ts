
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrowdinCollector extends SketchCollector {

    static CONFIG = {
        id: "crowdin",
        name: "Crowdin",
        description: "i18n.collectors.crowdin.description",
        version: "0",
        website: "https://crowdin.com/settings#payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517021.jpg",
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
        loginUrl: "https://crowdin.com/settings#payments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrowdinCollector.CONFIG);
    }
}
