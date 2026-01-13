
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmartestenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "smartestenergy",
        name: "smartestenergy",
        description: "i18n.collectors.smartestenergy.description",
        version: "0",
        website: "https://smartweb.smartestenergy.com/Account/LogIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899957.jpg",
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
        loginUrl: "https://smartweb.smartestenergy.com/Account/LogIn",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartestenergyCollector.CONFIG);
    }
}
