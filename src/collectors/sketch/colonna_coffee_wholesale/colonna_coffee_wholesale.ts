
import { SketchCollector } from '../../sketchCollector';

export class ColonnaCoffeeWholesaleCollector extends SketchCollector {

    static CONFIG = {
        id: "colonna_coffee_wholesale",
        name: "Colonna Coffee Wholesale",
        description: "i18n.collectors.colonna_coffee_wholesale.description",
        version: "0",
        website: "https://wholesale.colonnacoffee.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41880.jpg",
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
        entryUrl: "https://wholesale.colonnacoffee.com/account/login",
    }

    constructor() {
        super(ColonnaCoffeeWholesaleCollector.CONFIG);
    }
}
