
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InexioDslCollector extends SketchCollector {

    static CONFIG = {
        id: "inexio_dsl",
        name: "INEXIO DSL",
        description: "i18n.collectors.inexio_dsl.description",
        version: "0",
        website: "https://webmail.inexio.email/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/237939.jpg",
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
        loginUrl: "https://webmail.inexio.email/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InexioDslCollector.CONFIG);
    }
}
