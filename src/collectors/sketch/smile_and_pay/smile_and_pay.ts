
import { SketchCollector } from '../../sketchCollector';

export class SmileAndPayCollector extends SketchCollector {

    static CONFIG = {
        id: "smile_and_pay",
        name: "Smile & Pay",
        description: "i18n.collectors.smile_and_pay.description",
        version: "0",
        website: "https://espacepersonnel.smileandpay.com/view/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1543699.jpg",
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
        entryUrl: "https://espacepersonnel.smileandpay.com/view/invoices",
    }

    constructor() {
        super(SmileAndPayCollector.CONFIG);
    }
}
