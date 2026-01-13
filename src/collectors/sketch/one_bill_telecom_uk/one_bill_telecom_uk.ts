
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OneBillTelecomUkCollector extends SketchCollector {

    static CONFIG = {
        id: "one_bill_telecom_uk",
        name: "One Bill Telecom UK",
        description: "i18n.collectors.one_bill_telecom_uk.description",
        version: "0",
        website: "https://www.onebilltelecom.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382494.jpg",
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
        loginUrl: "https://www.onebilltelecom.co.uk/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneBillTelecomUkCollector.CONFIG);
    }
}
