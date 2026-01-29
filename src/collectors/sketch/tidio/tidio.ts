
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TidioCollector extends SketchCollector {

    static CONFIG = {
        id: "tidio",
        name: "TIDIO",
        description: "i18n.collectors.tidio.description",
        version: "0",
        website: "https://www.tidio.com/panel/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/783422.jpg",
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
        loginUrl: "https://www.tidio.com/panel/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TidioCollector.CONFIG);
    }
}
