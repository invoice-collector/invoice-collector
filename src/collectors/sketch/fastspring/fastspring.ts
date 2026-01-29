
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FastspringCollector extends SketchCollector {

    static CONFIG = {
        id: "fastspring",
        name: "FastSpring",
        description: "i18n.collectors.fastspring.description",
        version: "0",
        website: "https://fastspring.com/sign-in/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21024.jpg",
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
        loginUrl: "https://fastspring.com/sign-in/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FastspringCollector.CONFIG);
    }
}
