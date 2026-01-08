
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AscapCollector extends SketchCollector {

    static CONFIG = {
        id: "ascap",
        name: "ASCAP",
        description: "i18n.collectors.ascap.description",
        version: "0",
        website: "https://www.ascap.com/member-access#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8534.jpg",
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
        loginUrl: "https://www.ascap.com/member-access#login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AscapCollector.CONFIG);
    }
}
