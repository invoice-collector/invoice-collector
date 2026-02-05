
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmartboxCollector extends SketchCollector {

    static CONFIG = {
        id: "smartbox",
        name: "SmartBox",
        description: "i18n.collectors.smartbox.description",
        version: "0",
        website: "https://www.smartbox.com/fr/voucher/beneficiary/registerlogin/panel/accountLoginPanel/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122724.jpg",
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
        loginUrl: "https://www.smartbox.com/fr/voucher/beneficiary/registerlogin/panel/accountLoginPanel/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SmartboxCollector.CONFIG);
    }
}
