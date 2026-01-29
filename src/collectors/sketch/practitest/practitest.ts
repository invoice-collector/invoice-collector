
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PractitestCollector extends SketchCollector {

    static CONFIG = {
        id: "practitest",
        name: "Practitest",
        description: "i18n.collectors.practitest.description",
        version: "0",
        website: "https://prod.practitest.com/accounts/7226/payment_details/12360",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391882.jpg",
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
        loginUrl: "https://prod.practitest.com/accounts/7226/payment_details/12360",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PractitestCollector.CONFIG);
    }
}
