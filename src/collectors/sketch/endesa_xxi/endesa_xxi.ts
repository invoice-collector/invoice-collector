
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EndesaXxiCollector extends SketchCollector {

    static CONFIG = {
        id: "endesa_xxi",
        name: "Endesa XXI",
        description: "i18n.collectors.endesa_xxi.description",
        version: "0",
        website: "https://www.energiaxxi.com/login-en.html?d=Any",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203385.jpg",
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
        loginUrl: "https://www.energiaxxi.com/login-en.html?d=Any",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EndesaXxiCollector.CONFIG);
    }
}
