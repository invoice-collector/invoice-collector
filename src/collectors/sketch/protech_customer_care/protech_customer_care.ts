
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProtechCustomerCareCollector extends SketchCollector {

    static CONFIG = {
        id: "protech_customer_care",
        name: "Protech Customer Care",
        description: "i18n.collectors.protech_customer_care.description",
        version: "0",
        website: "https://my.protechassociates.com/My-Protech/My-Paid-Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/738693.jpg",
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
        loginUrl: "https://my.protechassociates.com/My-Protech/My-Paid-Invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProtechCustomerCareCollector.CONFIG);
    }
}
