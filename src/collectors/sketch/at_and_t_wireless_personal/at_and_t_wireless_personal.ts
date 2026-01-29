
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AtAndTWirelessPersonalCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_wireless_personal",
        name: "AT&T Wireless Personal",
        description: "i18n.collectors.at_and_t_wireless_personal.description",
        version: "0",
        website: "https://www.att.com/shop/login/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88905.jpg",
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
        loginUrl: "https://www.att.com/shop/login/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AtAndTWirelessPersonalCollector.CONFIG);
    }
}
