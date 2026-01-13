
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KdpAmazonCollector extends SketchCollector {

    static CONFIG = {
        id: "kdp_amazon",
        name: "KDP Amazon",
        description: "i18n.collectors.kdp_amazon.description",
        version: "0",
        website: "https://advertising.amazon.de/billing/history?entityId=ENTITY1M5SF34Z03AZI",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2017521.jpg",
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
        loginUrl: "https://advertising.amazon.de/billing/history?entityId=ENTITY1M5SF34Z03AZI",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KdpAmazonCollector.CONFIG);
    }
}
