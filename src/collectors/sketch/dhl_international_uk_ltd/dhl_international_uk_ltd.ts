
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DhlInternationalUkLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_international_uk_ltd",
        name: "DHL INTERNATIONAL (UK) LTD  ",
        description: "i18n.collectors.dhl_international_uk_ltd.description",
        version: "0",
        website: "https://send.dhlparcel.co.uk/login?returnurl=~",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153541.jpg",
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
        loginUrl: "https://send.dhlparcel.co.uk/login?returnurl=~",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DhlInternationalUkLtdCollector.CONFIG);
    }
}
