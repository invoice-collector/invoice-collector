
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BpmOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "bpm_online",
        name: "bpm online",
        description: "i18n.collectors.bpm_online.description",
        version: "0",
        website: "https://www.bpmonline.com/login-com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8283.jpg",
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
        loginUrl: "https://www.bpmonline.com/login-com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BpmOnlineCollector.CONFIG);
    }
}
