
import { SketchCollector } from '../../sketchCollector';

export class CrustPizzaCollector extends SketchCollector {

    static CONFIG = {
        id: "crust_pizza",
        name: "Crust Pizza",
        description: "i18n.collectors.crust_pizza.description",
        version: "0",
        website: "http://www.crust.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8844.jpg",
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
        entryUrl: "http://www.crust.com.au",
    }

    constructor() {
        super(CrustPizzaCollector.CONFIG);
    }
}
