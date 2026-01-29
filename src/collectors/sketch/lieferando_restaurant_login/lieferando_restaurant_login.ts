
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LieferandoRestaurantLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "lieferando_restaurant_login",
        name: "Lieferando - Restaurant-Login",
        description: "i18n.collectors.lieferando_restaurant_login.description",
        version: "0",
        website: "https://restaurants.lieferando.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56745.jpg",
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
        loginUrl: "https://restaurants.lieferando.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LieferandoRestaurantLoginCollector.CONFIG);
    }
}
