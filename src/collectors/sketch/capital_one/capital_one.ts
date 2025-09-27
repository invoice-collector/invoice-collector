
import { SketchCollector } from '../../sketchCollector';

export class CapitalOneCollector extends SketchCollector {

    static CONFIG = {
        id: "capital_one",
        name: "Capital One",
        description: "i18n.collectors.capital_one.description",
        version: "0",
        website: "https://www.capitalone.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84354.jpg",
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
        entryUrl: "https://www.capitalone.com/",
    }

    constructor() {
        super(CapitalOneCollector.CONFIG);
    }
}
