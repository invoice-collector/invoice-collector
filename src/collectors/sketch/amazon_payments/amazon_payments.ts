
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonPaymentsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_payments",
        name: "Amazon Payments",
        description: "i18n.collectors.amazon_payments.description",
        version: "0",
        website: "https://sellercentral-europe.amazon.com/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28378.jpg",
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
        entryUrl: "https://sellercentral-europe.amazon.com/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonPaymentsCollector.CONFIG);
    }
}
