
import { SketchCollector } from '../../sketchCollector';

export class UnityPaymentCollector extends SketchCollector {

    static CONFIG = {
        id: "unity_payment",
        name: "Unity Payment",
        description: "i18n.collectors.unity_payment.description",
        version: "0",
        website: "https://payments.unity3d.com/portal/viewAllInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988679.jpg",
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
        entryUrl: "https://payments.unity3d.com/portal/viewAllInvoices",
    }

    constructor() {
        super(UnityPaymentCollector.CONFIG);
    }
}
