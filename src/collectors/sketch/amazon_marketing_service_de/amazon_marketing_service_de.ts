
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonMarketingServiceDeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_marketing_service_de",
        name: "Amazon Marketing Service (.de)",
        description: "i18n.collectors.amazon_marketing_service_de.description",
        version: "0",
        website: "https://advertising.amazon.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16488.jpg",
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
        entryUrl: "https://advertising.amazon.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonMarketingServiceDeCollector.CONFIG);
    }
}
