
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class XeroxCollector extends SketchCollector {

    static CONFIG = {
        id: "xerox",
        name: "Xerox",
        description: "i18n.collectors.xerox.description",
        version: "0",
        website: "https://www.accounts.xerox.com/auth/login.jsf?&locale=en_US",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8522.jpg",
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
        loginUrl: "https://www.accounts.xerox.com/auth/login.jsf?&locale=en_US",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(XeroxCollector.CONFIG);
    }
}
