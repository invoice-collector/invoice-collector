
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonMarketingServiceFrCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_marketing_service_fr",
        name: "Amazon Marketing Service (.fr)",
        description: "i18n.collectors.amazon_marketing_service_fr.description",
        version: "0",
        website: "https://advertising.amazon.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36940.jpg",
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
        entryUrl: "https://advertising.amazon.fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonMarketingServiceFrCollector.CONFIG);
    }
}
