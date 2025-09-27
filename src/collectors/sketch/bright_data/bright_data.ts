
import { SketchCollector } from '../../sketchCollector';

export class BrightDataCollector extends SketchCollector {

    static CONFIG = {
        id: "bright_data",
        name: "bright data",
        description: "i18n.collectors.bright_data.description",
        version: "0",
        website: "https://brightdata.com/cp/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239458.jpg",
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
        entryUrl: "https://brightdata.com/cp/billing/invoices",
    }

    constructor() {
        super(BrightDataCollector.CONFIG);
    }
}
