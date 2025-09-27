
import { SketchCollector } from '../../sketchCollector';

export class WoltersKluwerCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "wolters_kluwer_canada",
        name: "Wolters Kluwer - Canada",
        description: "i18n.collectors.wolters_kluwer_canada.description",
        version: "0",
        website: "https://shop.wolterskluwer.ca/en/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74300.jpg",
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
        entryUrl: "https://shop.wolterskluwer.ca/en/customer/account/login",
    }

    constructor() {
        super(WoltersKluwerCanadaCollector.CONFIG);
    }
}
