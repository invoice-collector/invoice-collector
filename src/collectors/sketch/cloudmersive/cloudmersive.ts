
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CloudmersiveCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudmersive",
        name: "cloudmersive",
        description: "i18n.collectors.cloudmersive.description",
        version: "0",
        website: "https://portal.cloudmersive.com/manageproduct?ProductSelection=6de154e2-31ef-4d69-b1b4-f1af413d69ea",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098043.jpg",
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
        loginUrl: "https://portal.cloudmersive.com/manageproduct?ProductSelection=6de154e2-31ef-4d69-b1b4-f1af413d69ea",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CloudmersiveCollector.CONFIG);
    }
}
