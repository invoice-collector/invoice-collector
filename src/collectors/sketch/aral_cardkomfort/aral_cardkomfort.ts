
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AralCardkomfortCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_cardkomfort",
        name: "Aral CardKomfort",
        description: "i18n.collectors.aral_cardkomfort.description",
        version: "0",
        website: "https://www.bpplus.com/pages/aral/logon.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6637.jpg",
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
        loginUrl: "https://www.bpplus.com/pages/aral/logon.asp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AralCardkomfortCollector.CONFIG);
    }
}
