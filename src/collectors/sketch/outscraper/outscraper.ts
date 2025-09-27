
import { SketchCollector } from '../../sketchCollector';

export class OutscraperCollector extends SketchCollector {

    static CONFIG = {
        id: "outscraper",
        name: "Outscraper",
        description: "i18n.collectors.outscraper.description",
        version: "0",
        website: "https://app.outscraper.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695832.jpg",
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
        entryUrl: "https://app.outscraper.com/invoices",
    }

    constructor() {
        super(OutscraperCollector.CONFIG);
    }
}
