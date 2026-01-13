
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NewFlagProCollector extends SketchCollector {

    static CONFIG = {
        id: "new_flag_pro",
        name: "New Flag Pro",
        description: "i18n.collectors.new_flag_pro.description",
        version: "0",
        website: "https://de.newflag.pro/de/customer/order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3339848.jpg",
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
        loginUrl: "https://de.newflag.pro/de/customer/order/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NewFlagProCollector.CONFIG);
    }
}
