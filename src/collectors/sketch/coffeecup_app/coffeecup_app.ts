
import { SketchCollector } from '../../sketchCollector';

export class CoffeecupAppCollector extends SketchCollector {

    static CONFIG = {
        id: "coffeecup_app",
        name: "CoffeeCup App",
        description: "i18n.collectors.coffeecup_app.description",
        version: "0",
        website: "https://budo.coffeecupapp.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1314132.jpg",
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
        entryUrl: "https://budo.coffeecupapp.com/account/billing",
    }

    constructor() {
        super(CoffeecupAppCollector.CONFIG);
    }
}
