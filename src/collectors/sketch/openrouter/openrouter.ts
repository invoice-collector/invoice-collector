
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpenrouterCollector extends SketchCollector {

    static CONFIG = {
        id: "openrouter",
        name: "OpenRouter",
        description: "i18n.collectors.openrouter.description",
        version: "0",
        website: "https://openrouter.ai/settings/credits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2095282.jpg",
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
        loginUrl: "https://openrouter.ai/settings/credits",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpenrouterCollector.CONFIG);
    }
}
