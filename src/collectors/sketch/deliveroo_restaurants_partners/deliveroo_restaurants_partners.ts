
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeliverooRestaurantsPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "deliveroo_restaurants_partners",
        name: "Deliveroo Restaurants /Partners",
        description: "i18n.collectors.deliveroo_restaurants_partners.description",
        version: "0",
        website: "https://restaurant-hub.deliveroo.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169129.jpg",
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
        loginUrl: "https://restaurant-hub.deliveroo.net/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DeliverooRestaurantsPartnersCollector.CONFIG);
    }
}
