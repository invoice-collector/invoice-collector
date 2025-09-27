
import { SketchCollector } from '../../sketchCollector';

export class AmazonMarketingServiceEsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_marketing_service_es",
        name: "Amazon Marketing Service (.es)",
        description: "i18n.collectors.amazon_marketing_service_es.description",
        version: "0",
        website: "https://advertising.amazon.es",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36938.jpg",
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
        entryUrl: "https://advertising.amazon.es",
    }

    constructor() {
        super(AmazonMarketingServiceEsCollector.CONFIG);
    }
}
