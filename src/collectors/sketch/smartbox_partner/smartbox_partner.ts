
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmartboxPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "smartbox_partner",
        name: "smartbox partner",
        description: "i18n.collectors.smartbox_partner.description",
        version: "0",
        website: "https://partners.smartbox-group.com/s/login/?language=en_GB&startURL=%2Fs%2F&ec=302",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037319.jpg",
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
        loginUrl: "https://partners.smartbox-group.com/s/login/?language=en_GB&startURL=%2Fs%2F&ec=302",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartboxPartnerCollector.CONFIG);
    }
}
