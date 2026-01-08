
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnumCollector extends SketchCollector {

    static CONFIG = {
        id: "unum",
        name: "UNUM",
        description: "i18n.collectors.unum.description",
        version: "0",
        website: "https://app.unum.la/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/844429.jpg",
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
        loginUrl: "https://app.unum.la/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnumCollector.CONFIG);
    }
}
