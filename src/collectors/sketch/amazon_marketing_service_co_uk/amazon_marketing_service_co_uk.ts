
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonMarketingServiceCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_marketing_service_co_uk",
        name: "Amazon Marketing Service (.co.uk)",
        description: "i18n.collectors.amazon_marketing_service_co_uk.description",
        version: "0",
        website: "https://advertising.amazon.co.uk/billing/history/ref=ams_head_billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36936.jpg",
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
        loginUrl: "https://advertising.amazon.co.uk/billing/history/ref=ams_head_billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonMarketingServiceCoUkCollector.CONFIG);
    }
}
