
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GreaterSudburyUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "greater_sudbury_utilities",
        name: "Greater Sudbury Utilities",
        description: "i18n.collectors.greater_sudbury_utilities.description",
        version: "0",
        website: "https://myaccount.gsuinc.ca/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9401.jpg",
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
        loginUrl: "https://myaccount.gsuinc.ca/app/login.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreaterSudburyUtilitiesCollector.CONFIG);
    }
}
