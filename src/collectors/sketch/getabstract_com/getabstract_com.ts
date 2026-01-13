
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GetabstractComCollector extends SketchCollector {

    static CONFIG = {
        id: "getabstract_com",
        name: "getabstract.com",
        description: "i18n.collectors.getabstract_com.description",
        version: "0",
        website: "https://www.getabstract.com/de/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1966448.jpg",
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
        loginUrl: "https://www.getabstract.com/de/myaccount",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetabstractComCollector.CONFIG);
    }
}
