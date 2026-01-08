
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OneComCollector extends SketchCollector {

    static CONFIG = {
        id: "one_com",
        name: "One.com",
        description: "i18n.collectors.one_com.description",
        version: "0",
        website: "https://login.one.com/cp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/398.jpg",
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
        loginUrl: "https://login.one.com/cp/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneComCollector.CONFIG);
    }
}
