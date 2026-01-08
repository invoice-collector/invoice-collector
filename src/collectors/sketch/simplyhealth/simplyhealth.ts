
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimplyhealthCollector extends SketchCollector {

    static CONFIG = {
        id: "simplyhealth",
        name: "SimplyHealth",
        description: "i18n.collectors.simplyhealth.description",
        version: "0",
        website: "https://www.simplyhealth.co.uk/corporate-portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4381660.jpg",
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
        loginUrl: "https://www.simplyhealth.co.uk/corporate-portal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimplyhealthCollector.CONFIG);
    }
}
