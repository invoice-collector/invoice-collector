
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _123RegCollector extends SketchCollector {

    static CONFIG = {
        id: "123_reg",
        name: "123 Reg",
        description: "i18n.collectors.123_reg.description",
        version: "0",
        website: "https://www.123-reg.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8700.jpg",
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
        loginUrl: "https://www.123-reg.co.uk",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123RegCollector.CONFIG);
    }
}
