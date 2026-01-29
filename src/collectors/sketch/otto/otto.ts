
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OttoCollector extends SketchCollector {

    static CONFIG = {
        id: "otto",
        name: "Otto",
        description: "i18n.collectors.otto.description",
        version: "0",
        website: "https://www.otto.de/user/login?entryPoint=loginArea",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11681.jpg",
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
        loginUrl: "https://www.otto.de/user/login?entryPoint=loginArea",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OttoCollector.CONFIG);
    }
}
