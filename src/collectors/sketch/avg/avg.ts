
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvgCollector extends SketchCollector {

    static CONFIG = {
        id: "avg",
        name: "AVG",
        description: "i18n.collectors.avg.description",
        version: "0",
        website: "https://myaccount.avg.com/de-de/my-account-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9742.jpg",
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
        loginUrl: "https://myaccount.avg.com/de-de/my-account-login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvgCollector.CONFIG);
    }
}
