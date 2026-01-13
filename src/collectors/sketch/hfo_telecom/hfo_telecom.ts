
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HfoTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "hfo_telecom",
        name: "HFO Telecom",
        description: "i18n.collectors.hfo_telecom.description",
        version: "0",
        website: "https://rechnung.hfo-telecom.de/Portal1/Login.cms?ReturnUrl=%2fPortal1%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7017.jpg",
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
        loginUrl: "https://rechnung.hfo-telecom.de/Portal1/Login.cms?ReturnUrl=%2fPortal1%2f",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HfoTelecomCollector.CONFIG);
    }
}
