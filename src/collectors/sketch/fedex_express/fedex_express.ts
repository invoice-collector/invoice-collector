
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FedexExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex_express",
        name: "FEDEX EXPRESS",
        description: "i18n.collectors.fedex_express.description",
        version: "0",
        website: "https://www.fedex.com/secure-login/en-ph/#/login-credentials",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040937.jpg",
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
        loginUrl: "https://www.fedex.com/secure-login/en-ph/#/login-credentials",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FedexExpressCollector.CONFIG);
    }
}
