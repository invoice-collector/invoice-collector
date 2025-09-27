
import { SketchCollector } from '../../sketchCollector';

export class RetailadsCollector extends SketchCollector {

    static CONFIG = {
        id: "retailads",
        name: "RetailAds",
        description: "i18n.collectors.retailads.description",
        version: "0",
        website: "https://login.retailads.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776445.jpg",
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
        entryUrl: "https://login.retailads.net",
    }

    constructor() {
        super(RetailadsCollector.CONFIG);
    }
}
