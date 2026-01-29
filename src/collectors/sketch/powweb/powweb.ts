
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PowwebCollector extends SketchCollector {

    static CONFIG = {
        id: "powweb",
        name: "PowWeb",
        description: "i18n.collectors.powweb.description",
        version: "0",
        website: "https://secure.powweb.com/secure/login.bml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8976.jpg",
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
        loginUrl: "https://secure.powweb.com/secure/login.bml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PowwebCollector.CONFIG);
    }
}
