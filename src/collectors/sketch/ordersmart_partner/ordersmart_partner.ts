
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrdersmartPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "ordersmart_partner",
        name: "OrderSmart - Partner",
        description: "i18n.collectors.ordersmart_partner.description",
        version: "0",
        website: "https://my.ordersmart.de/ClientInvoices/BillingPeriodIndex",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181515.jpg",
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
        loginUrl: "https://my.ordersmart.de/ClientInvoices/BillingPeriodIndex",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrdersmartPartnerCollector.CONFIG);
    }
}
