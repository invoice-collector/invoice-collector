
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LangdockCollector extends SketchCollector {

    static CONFIG = {
        id: "langdock",
        name: "Langdock",
        description: "i18n.collectors.langdock.description",
        version: "0",
        website: "https://app.langdock.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206339.jpg",
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
        loginUrl: "https://app.langdock.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LangdockCollector.CONFIG);
    }
}
