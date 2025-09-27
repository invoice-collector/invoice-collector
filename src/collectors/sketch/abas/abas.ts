
import { SketchCollector } from '../../sketchCollector';

export class AbasCollector extends SketchCollector {

    static CONFIG = {
        id: "abas",
        name: "abas",
        description: "i18n.collectors.abas.description",
        version: "0",
        website: "https://abas-erp.com/de/customer-and-partner-logins",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/558.jpg",
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
        entryUrl: "https://abas-erp.com/de/customer-and-partner-logins",
    }

    constructor() {
        super(AbasCollector.CONFIG);
    }
}
