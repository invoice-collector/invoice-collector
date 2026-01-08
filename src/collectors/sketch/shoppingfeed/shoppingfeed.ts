
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShoppingfeedCollector extends SketchCollector {

    static CONFIG = {
        id: "shoppingfeed",
        name: "Shoppingfeed",
        description: "i18n.collectors.shoppingfeed.description",
        version: "0",
        website: "https://app.shopping-feed.com/facturation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131136.jpg",
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
        loginUrl: "https://app.shopping-feed.com/facturation",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShoppingfeedCollector.CONFIG);
    }
}
