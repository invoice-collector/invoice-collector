
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VoipfoneCollector extends SketchCollector {

    static CONFIG = {
        id: "voipfone",
        name: "Voipfone",
        description: "i18n.collectors.voipfone.description",
        version: "0",
        website: "https://www.voipfone.co.uk/login.php?url=%2Faccount.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54870.jpg",
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
        loginUrl: "https://www.voipfone.co.uk/login.php?url=%2Faccount.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VoipfoneCollector.CONFIG);
    }
}
