
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KlookCollector extends SketchCollector {

    static CONFIG = {
        id: "klook",
        name: "Klook",
        description: "i18n.collectors.klook.description",
        version: "0",
        website: "https://merchant.klook.com/booking_report?t=1583932326549",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226715.jpg",
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
        loginUrl: "https://merchant.klook.com/booking_report?t=1583932326549",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlookCollector.CONFIG);
    }
}
