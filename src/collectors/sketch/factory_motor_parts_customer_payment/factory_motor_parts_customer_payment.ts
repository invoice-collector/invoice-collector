
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FactoryMotorPartsCustomerPaymentCollector extends SketchCollector {

    static CONFIG = {
        id: "factory_motor_parts_customer_payment",
        name: "Factory Motor Parts - CUSTOMER PAYMENT",
        description: "i18n.collectors.factory_motor_parts_customer_payment.description",
        version: "0",
        website: "https://ebilling.factorymotorparts.com/custportal/PayInvoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642951.jpg",
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
        entryUrl: "https://ebilling.factorymotorparts.com/custportal/PayInvoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FactoryMotorPartsCustomerPaymentCollector.CONFIG);
    }
}
