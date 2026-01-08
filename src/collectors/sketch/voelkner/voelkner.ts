
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VoelknerCollector extends SketchCollector {

    static CONFIG = {
        id: "voelkner",
        name: "Voelkner",
        description: "i18n.collectors.voelkner.description",
        version: "0",
        website: "https://www.voelkner.de/account/history.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6145.jpg",
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
        loginUrl: "https://www.voelkner.de/account/history.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VoelknerCollector.CONFIG);
    }
}
