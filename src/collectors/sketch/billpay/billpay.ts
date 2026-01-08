
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BillpayCollector extends SketchCollector {

    static CONFIG = {
        id: "billpay",
        name: "Billpay",
        description: "i18n.collectors.billpay.description",
        version: "0",
        website: "https://admin.billpay.de/MerchantInvoiceApproved.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30558.jpg",
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
        loginUrl: "https://admin.billpay.de/MerchantInvoiceApproved.action",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BillpayCollector.CONFIG);
    }
}
