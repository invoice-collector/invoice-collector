
import { SketchCollector } from '../../sketchCollector';

export class UptrendsCollector extends SketchCollector {

    static CONFIG = {
        id: "uptrends",
        name: "uptrends",
        description: "i18n.collectors.uptrends.description",
        version: "0",
        website: "https://app.uptrends.com/Report/AccountSettings#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161953.jpg",
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
        entryUrl: "https://app.uptrends.com/Report/AccountSettings#invoices",
    }

    constructor() {
        super(UptrendsCollector.CONFIG);
    }
}
