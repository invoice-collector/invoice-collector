
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InexioCollector extends SketchCollector {

    static CONFIG = {
        id: "inexio",
        name: "INeXIO",
        description: "i18n.collectors.inexio.description",
        version: "0",
        website: "https://my.inexio.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35455.jpg",
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
        loginUrl: "https://my.inexio.net/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InexioCollector.CONFIG);
    }
}
