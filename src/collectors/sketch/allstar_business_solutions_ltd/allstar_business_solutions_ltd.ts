
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllstarBusinessSolutionsLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "allstar_business_solutions_ltd",
        name: "ALLSTAR BUSINESS SOLUTIONS LTD  ",
        description: "i18n.collectors.allstar_business_solutions_ltd.description",
        version: "0",
        website: "https://myaccount.allstaronline.co.uk/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153551.jpg",
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
        loginUrl: "https://myaccount.allstaronline.co.uk/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AllstarBusinessSolutionsLtdCollector.CONFIG);
    }
}
