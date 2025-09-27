
import { SketchCollector } from '../../sketchCollector';

export class AquarienpflanzenShopCollector extends SketchCollector {

    static CONFIG = {
        id: "aquarienpflanzen_shop",
        name: "Aquarienpflanzen - Shop",
        description: "i18n.collectors.aquarienpflanzen_shop.description",
        version: "0",
        website: "https://www.aquarienpflanzen-shop.de/Mein-Konto?bestellung=219815",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2586024.jpg",
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
        entryUrl: "https://www.aquarienpflanzen-shop.de/Mein-Konto?bestellung=219815",
    }

    constructor() {
        super(AquarienpflanzenShopCollector.CONFIG);
    }
}
