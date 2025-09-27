
import { SketchCollector } from '../../sketchCollector';

export class MotionAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "motion_ads",
        name: "Motion Ads",
        description: "i18n.collectors.motion_ads.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1Hhz1yExtGcOU4I6/live_YWNjdF8xSGh6MXlFeHRHY09VNEk2LF9MdXg4S0h6b2RJSXV1MlJhZkZyRmRQSUtEeW1nSmZhLDU3MDQ2MjI40200GMwzPk0T?s=il&locale=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1438936.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1Hhz1yExtGcOU4I6/live_YWNjdF8xSGh6MXlFeHRHY09VNEk2LF9MdXg4S0h6b2RJSXV1MlJhZkZyRmRQSUtEeW1nSmZhLDU3MDQ2MjI40200GMwzPk0T?s=il&locale=de-DE",
    }

    constructor() {
        super(MotionAdsCollector.CONFIG);
    }
}
