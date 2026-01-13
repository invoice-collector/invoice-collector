
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GorillaRoiCollector extends SketchCollector {

    static CONFIG = {
        id: "gorilla_roi",
        name: "Gorilla ROI",
        description: "i18n.collectors.gorilla_roi.description",
        version: "0",
        website: "https://app.gorillaroi.com/billing.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82022.jpg",
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
        loginUrl: "https://app.gorillaroi.com/billing.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GorillaRoiCollector.CONFIG);
    }
}
