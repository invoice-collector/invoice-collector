
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DripComCollector extends SketchCollector {

    static CONFIG = {
        id: "drip_com",
        name: "drip.com",
        description: "i18n.collectors.drip_com.description",
        version: "0",
        website: "https://login.getdrip.com/login/email?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109628.jpg",
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
        loginUrl: "https://login.getdrip.com/login/email?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DripComCollector.CONFIG);
    }
}
