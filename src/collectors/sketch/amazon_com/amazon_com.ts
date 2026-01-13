
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonComCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_com",
        name: "Amazon (.com)",
        description: "i18n.collectors.amazon_com.description",
        version: "0",
        website: "https://www.amazon.com/gp/css/order-history/ref=nav_youraccount_orders",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
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
        loginUrl: "https://www.amazon.com/gp/css/order-history/ref=nav_youraccount_orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonComCollector.CONFIG);
    }
}
