
import { SketchCollector } from '../../sketchCollector';

export class CoffeefairCollector extends SketchCollector {

    static CONFIG = {
        id: "coffeefair",
        name: "Coffeefair",
        description: "i18n.collectors.coffeefair.description",
        version: "0",
        website: "https://www.coffeefair.de/mein-konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28439.jpg",
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
        entryUrl: "https://www.coffeefair.de/mein-konto",
    }

    constructor() {
        super(CoffeefairCollector.CONFIG);
    }
}
