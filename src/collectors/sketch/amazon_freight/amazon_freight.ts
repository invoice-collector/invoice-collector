
import { SketchCollector } from '../../sketchCollector';

export class AmazonFreightCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_freight",
        name: "Amazon Freight",
        description: "i18n.collectors.amazon_freight.description",
        version: "0",
        website: "https://freight.amazon.de/billing-and-payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079857.jpg",
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
        entryUrl: "https://freight.amazon.de/billing-and-payments",
    }

    constructor() {
        super(AmazonFreightCollector.CONFIG);
    }
}
