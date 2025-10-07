
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BilbeeCollector extends SketchCollector {

    static CONFIG = {
        id: "bilbee",
        name: "bilbee",
        description: "i18n.collectors.bilbee.description",
        version: "0",
        website: "https://app.billbee.io/app_v2/account/invoices-and-payment/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126830.jpg",
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
        entryUrl: "https://app.billbee.io/app_v2/account/invoices-and-payment/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BilbeeCollector.CONFIG);
    }
}
