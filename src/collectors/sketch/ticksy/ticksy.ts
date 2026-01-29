
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TicksyCollector extends SketchCollector {

    static CONFIG = {
        id: "ticksy",
        name: "ticksy",
        description: "i18n.collectors.ticksy.description",
        version: "0",
        website: "https://ticksy.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19801.jpg",
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
        loginUrl: "https://ticksy.com/account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TicksyCollector.CONFIG);
    }
}
