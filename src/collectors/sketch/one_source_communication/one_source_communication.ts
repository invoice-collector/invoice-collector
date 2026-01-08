
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OneSourceCommunicationCollector extends SketchCollector {

    static CONFIG = {
        id: "one_source_communication",
        name: "One Source Communication",
        description: "i18n.collectors.one_source_communication.description",
        version: "0",
        website: "https://esp.1scom.com/esp/security/login?ReturnUrl=https%3a%2f%2fesp.1scom.com%2fesp%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387263.jpg",
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
        loginUrl: "https://esp.1scom.com/esp/security/login?ReturnUrl=https%3a%2f%2fesp.1scom.com%2fesp%2f",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneSourceCommunicationCollector.CONFIG);
    }
}
