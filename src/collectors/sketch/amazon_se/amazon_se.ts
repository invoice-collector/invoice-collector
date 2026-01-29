
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonSeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_se",
        name: "Amazon (.se)",
        description: "i18n.collectors.amazon_se.description",
        version: "0",
        website: "https://www.amazon.se/gp/css/order-history?ref_=nav_AccountFlyout_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1763995.jpg",
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
        loginUrl: "https://www.amazon.se/gp/css/order-history?ref_=nav_AccountFlyout_orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonSeCollector.CONFIG);
    }
}
