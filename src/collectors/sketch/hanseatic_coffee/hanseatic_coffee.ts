
import { SketchCollector } from '../../sketchCollector';

export class HanseaticCoffeeCollector extends SketchCollector {

    static CONFIG = {
        id: "hanseatic_coffee",
        name: "Hanseatic Coffee",
        description: "i18n.collectors.hanseatic_coffee.description",
        version: "0",
        website: "https://hanseatic-coffee.com/account?_gl=1*p38520*_up*MQ..*_ga*MTk0NjIwNDkwNC4xNzM5MDQxMTI4*_ga_0N79EF267Y*MTczOTA0MTEyNy4xLjAuMTczOTA0MTEyNy4wLjAuMA..",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334806.jpg",
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
        entryUrl: "https://hanseatic-coffee.com/account?_gl=1*p38520*_up*MQ..*_ga*MTk0NjIwNDkwNC4xNzM5MDQxMTI4*_ga_0N79EF267Y*MTczOTA0MTEyNy4xLjAuMTczOTA0MTEyNy4wLjAuMA..",
    }

    constructor() {
        super(HanseaticCoffeeCollector.CONFIG);
    }
}
