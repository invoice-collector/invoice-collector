
import { SketchCollector } from '../../sketchCollector';

export class AmazonLogisticsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_logistics",
        name: "Amazon Logistics",
        description: "i18n.collectors.amazon_logistics.description",
        version: "0",
        website: "https://logistics.amazon.de/flexpayments/invoices?navMenuVariant=external",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2418844.jpg",
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
        entryUrl: "https://logistics.amazon.de/flexpayments/invoices?navMenuVariant=external",
    }

    constructor() {
        super(AmazonLogisticsCollector.CONFIG);
    }
}
