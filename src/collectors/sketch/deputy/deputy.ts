
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeputyCollector extends SketchCollector {

    static CONFIG = {
        id: "deputy",
        name: "Deputy",
        description: "i18n.collectors.deputy.description",
        version: "0",
        website: "https://once.deputy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102634.jpg",
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
        loginUrl: "https://once.deputy.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeputyCollector.CONFIG);
    }
}
