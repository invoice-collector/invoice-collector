
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WoodriverenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "woodriverenergy",
        name: "Woodriverenergy",
        description: "i18n.collectors.woodriverenergy.description",
        version: "0",
        website: "https://sso.woodriverenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382668.jpg",
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
        loginUrl: "https://sso.woodriverenergy.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoodriverenergyCollector.CONFIG);
    }
}
