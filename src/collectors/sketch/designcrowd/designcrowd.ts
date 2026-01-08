
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DesigncrowdCollector extends SketchCollector {

    static CONFIG = {
        id: "designcrowd",
        name: "DesignCrowd",
        description: "i18n.collectors.designcrowd.description",
        version: "0",
        website: "https://www.designcrowd.de/registration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19508.jpg",
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
        loginUrl: "https://www.designcrowd.de/registration",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DesigncrowdCollector.CONFIG);
    }
}
