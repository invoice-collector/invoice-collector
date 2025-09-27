
import { SketchCollector } from '../../sketchCollector';

export class CoffeeCircleCollector extends SketchCollector {

    static CONFIG = {
        id: "coffee_circle",
        name: "Coffee Circle",
        description: "i18n.collectors.coffee_circle.description",
        version: "0",
        website: "https://www.coffeecircle.com/de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35800.jpg",
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
        entryUrl: "https://www.coffeecircle.com/de/account/orders",
    }

    constructor() {
        super(CoffeeCircleCollector.CONFIG);
    }
}
