
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonKindleDirectPublishingCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_kindle_direct_publishing",
        name: "Amazon Kindle Direct Publishing",
        description: "i18n.collectors.amazon_kindle_direct_publishing.description",
        version: "0",
        website: "https://kdp.amazon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7988.jpg",
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
        loginUrl: "https://kdp.amazon.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonKindleDirectPublishingCollector.CONFIG);
    }
}
