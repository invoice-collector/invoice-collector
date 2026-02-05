
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EverbillCollector extends SketchCollector {

    static CONFIG = {
        id: "everbill",
        name: "everbill",
        description: "i18n.collectors.everbill.description",
        version: "0",
        website: "https://secure.everbill.eu/?_ga=1.5276915.1941659048.1493191247",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10141.jpg",
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
        loginUrl: "https://secure.everbill.eu/?_ga=1.5276915.1941659048.1493191247",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EverbillCollector.CONFIG);
    }
}
