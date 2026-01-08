
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WexMotorpassCollector extends SketchCollector {

    static CONFIG = {
        id: "wex_motorpass",
        name: "WEX Motorpass",
        description: "i18n.collectors.wex_motorpass.description",
        version: "0",
        website: "https://osc.motorpass.com.au/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8556.jpg",
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
        loginUrl: "https://osc.motorpass.com.au/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WexMotorpassCollector.CONFIG);
    }
}
