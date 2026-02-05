
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CaptureoneCollector extends SketchCollector {

    static CONFIG = {
        id: "captureone",
        name: "Captureone",
        description: "i18n.collectors.captureone.description",
        version: "0",
        website: "https://www.captureone.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399171.jpg",
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
        loginUrl: "https://www.captureone.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CaptureoneCollector.CONFIG);
    }
}
