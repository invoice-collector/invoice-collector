
import { SketchCollector } from '../../sketchCollector';

export class SalesforceCollector extends SketchCollector {

    static CONFIG = {
        id: "salesforce",
        name: "SalesForce",
        description: "i18n.collectors.salesforce.description",
        version: "0",
        website: "https://login.salesforce.com/?locale=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/525.jpg",
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
        entryUrl: "https://login.salesforce.com/?locale=de",
    }

    constructor() {
        super(SalesforceCollector.CONFIG);
    }
}
