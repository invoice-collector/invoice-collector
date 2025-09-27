
import { SketchCollector } from '../../sketchCollector';

export class FoodmigosCollector extends SketchCollector {

    static CONFIG = {
        id: "foodmigos",
        name: "Foodmigos",
        description: "i18n.collectors.foodmigos.description",
        version: "0",
        website: "https://restaurant.foodamigos.io/online-shop/payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4233992.jpg",
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
        entryUrl: "https://restaurant.foodamigos.io/online-shop/payouts",
    }

    constructor() {
        super(FoodmigosCollector.CONFIG);
    }
}
