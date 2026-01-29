
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EgymBusinessSuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "egym_business_suite",
        name: "EGYM - Business Suite",
        description: "i18n.collectors.egym_business_suite.description",
        version: "0",
        website: "https://www.egym.com/business-suite/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4427112.jpg",
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
        loginUrl: "https://www.egym.com/business-suite/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EgymBusinessSuiteCollector.CONFIG);
    }
}
