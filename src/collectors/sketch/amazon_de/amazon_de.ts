
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonDeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_de",
        name: "Amazon (.de)",
        description: "i18n.collectors.amazon_de.description",
        version: "0",
        website: "https://www.amazon.de/gp/css/order-history/ref=nav_youraccount_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/394.jpg",
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
        loginUrl: "https://www.amazon.de/gp/css/order-history/ref=nav_youraccount_orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonDeCollector.CONFIG);
    }
}
