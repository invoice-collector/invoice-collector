
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShoppingAtDerOsterreichsicheOnlineMarktplatzCollector extends SketchCollector {

    static CONFIG = {
        id: "shopping_at_der_osterreichsiche_online_marktplatz",
        name: "shopping.at - Der osterreichsiche Online Marktplatz",
        description: "i18n.collectors.shopping_at_der_osterreichsiche_online_marktplatz.description",
        version: "0",
        website: "https://portal.shoepping.at/marketplaceportal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778100.jpg",
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
        loginUrl: "https://portal.shoepping.at/marketplaceportal/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShoppingAtDerOsterreichsicheOnlineMarktplatzCollector.CONFIG);
    }
}
