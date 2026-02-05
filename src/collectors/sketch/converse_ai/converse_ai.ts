
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConverseAiCollector extends SketchCollector {

    static CONFIG = {
        id: "converse_ai",
        name: "converse.AI",
        description: "i18n.collectors.converse_ai.description",
        version: "0",
        website: "http://www.converse.ai/#getstarted",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26381.jpg",
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
        loginUrl: "http://www.converse.ai/#getstarted",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ConverseAiCollector.CONFIG);
    }
}
