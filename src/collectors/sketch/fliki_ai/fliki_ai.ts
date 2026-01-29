
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlikiAiCollector extends SketchCollector {

    static CONFIG = {
        id: "fliki_ai",
        name: "Fliki.ai",
        description: "i18n.collectors.fliki_ai.description",
        version: "0",
        website: "https://app.fliki.ai/?login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103863.jpg",
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
        loginUrl: "https://app.fliki.ai/?login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FlikiAiCollector.CONFIG);
    }
}
