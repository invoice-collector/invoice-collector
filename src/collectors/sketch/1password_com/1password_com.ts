
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _1passwordComCollector extends SketchCollector {

    static CONFIG = {
        id: "1password_com",
        name: "1Password (.com)",
        description: "i18n.collectors.1password_com.description",
        version: "0",
        website: "https://my.1password.com/signin?l=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7293.jpg",
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
        loginUrl: "https://my.1password.com/signin?l=en",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_1passwordComCollector.CONFIG);
    }
}
