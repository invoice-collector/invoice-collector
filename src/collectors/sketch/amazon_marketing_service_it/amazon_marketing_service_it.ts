
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonMarketingServiceItCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_marketing_service_it",
        name: "Amazon Marketing Service (.it)",
        description: "i18n.collectors.amazon_marketing_service_it.description",
        version: "0",
        website: "https://advertising.amazon.it",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36941.jpg",
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
        entryUrl: "https://advertising.amazon.it",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonMarketingServiceItCollector.CONFIG);
    }
}
