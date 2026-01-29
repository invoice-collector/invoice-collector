
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JitterCollector extends SketchCollector {

    static CONFIG = {
        id: "jitter",
        name: "Jitter",
        description: "i18n.collectors.jitter.description",
        version: "0",
        website: "https://jitter.video/join/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2867215.jpg",
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
        loginUrl: "https://jitter.video/join/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JitterCollector.CONFIG);
    }
}
