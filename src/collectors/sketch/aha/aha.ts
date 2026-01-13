
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AhaCollector extends SketchCollector {

    static CONFIG = {
        id: "aha",
        name: "Aha!",
        description: "i18n.collectors.aha.description",
        version: "0",
        website: "https://secure.aha.io/session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103870.jpg",
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
        loginUrl: "https://secure.aha.io/session/new",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AhaCollector.CONFIG);
    }
}
