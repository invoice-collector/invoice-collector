
import { SketchCollector } from '../../sketchCollector';

export class AmazonKindleDirectPublishingCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_kindle_direct_publishing",
        name: "Amazon Kindle Direct Publishing",
        description: "i18n.collectors.amazon_kindle_direct_publishing.description",
        version: "0",
        website: "https://kdp.amazon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7988.jpg",
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
        entryUrl: "https://kdp.amazon.com",
    }

    constructor() {
        super(AmazonKindleDirectPublishingCollector.CONFIG);
    }
}
