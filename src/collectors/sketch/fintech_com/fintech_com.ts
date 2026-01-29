
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FintechComCollector extends SketchCollector {

    static CONFIG = {
        id: "fintech_com",
        name: "Fintech.com",
        description: "i18n.collectors.fintech_com.description",
        version: "0",
        website: "https://www.fintech.net/fms/reports/retailer_invoice_information_summary.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297687.jpg",
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
        loginUrl: "https://www.fintech.net/fms/reports/retailer_invoice_information_summary.asp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FintechComCollector.CONFIG);
    }
}
