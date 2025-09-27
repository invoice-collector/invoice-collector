
import { SketchCollector } from '../../sketchCollector';

export class WalmartCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "walmart_canada",
        name: "Walmart Canada",
        description: "i18n.collectors.walmart_canada.description",
        version: "0",
        website: "https://www.walmart.ca/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63499.jpg",
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
        entryUrl: "https://www.walmart.ca/en",
    }

    constructor() {
        super(WalmartCanadaCollector.CONFIG);
    }
}
