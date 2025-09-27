
import { SketchCollector } from '../../sketchCollector';

export class RapidFlyerPromoFlyerCollector extends SketchCollector {

    static CONFIG = {
        id: "rapid_flyer_promo_flyer",
        name: "Rapid-flyer - Promo-flyer",
        description: "i18n.collectors.rapid_flyer_promo_flyer.description",
        version: "0",
        website: "https://www.rapid-flyer.com/authentification?back=https://www.rapid-flyer.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122462.jpg",
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
        entryUrl: "https://www.rapid-flyer.com/authentification?back=https://www.rapid-flyer.com/",
    }

    constructor() {
        super(RapidFlyerPromoFlyerCollector.CONFIG);
    }
}
