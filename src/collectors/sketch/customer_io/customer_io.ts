
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CustomerIoCollector extends SketchCollector {

    static CONFIG = {
        id: "customer_io",
        name: "Customer.io",
        description: "i18n.collectors.customer_io.description",
        version: "0",
        website: "https://fly.customer.io/settings/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38439.jpg",
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
        entryUrl: "https://fly.customer.io/settings/receipts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CustomerIoCollector.CONFIG);
    }
}
