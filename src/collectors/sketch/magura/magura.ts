
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MaguraCollector extends SketchCollector {

    static CONFIG = {
        id: "magura",
        name: "Magura",
        description: "i18n.collectors.magura.description",
        version: "0",
        website: "https://www.magura-b2b.com/magura/de/EUR/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28987.jpg",
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
        loginUrl: "https://www.magura-b2b.com/magura/de/EUR/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaguraCollector.CONFIG);
    }
}
