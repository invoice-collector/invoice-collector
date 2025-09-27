
import { SketchCollector } from '../../sketchCollector';

export class PaytweakCollector extends SketchCollector {

    static CONFIG = {
        id: "paytweak",
        name: "Paytweak",
        description: "i18n.collectors.paytweak.description",
        version: "0",
        website: "https://www.paytweak.com/adminp/account#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3027532.jpg",
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
        entryUrl: "https://www.paytweak.com/adminp/account#invoices",
    }

    constructor() {
        super(PaytweakCollector.CONFIG);
    }
}
