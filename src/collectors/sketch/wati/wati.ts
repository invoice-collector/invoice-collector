
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WatiCollector extends SketchCollector {

    static CONFIG = {
        id: "wati",
        name: "Wati",
        description: "i18n.collectors.wati.description",
        version: "0",
        website: "https://wati.chargebee.com/portal/v2/billing_history?source=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1665852.jpg",
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
        loginUrl: "https://wati.chargebee.com/portal/v2/billing_history?source=home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WatiCollector.CONFIG);
    }
}
