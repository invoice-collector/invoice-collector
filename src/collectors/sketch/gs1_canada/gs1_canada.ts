
import { SketchCollector } from '../../sketchCollector';

export class Gs1CanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "gs1_canada",
        name: "GS1 Canada",
        description: "i18n.collectors.gs1_canada.description",
        version: "0",
        website: "https://www.gs1ca.org/app_invoices/onlinePayment/Display.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197398.jpg",
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
        entryUrl: "https://www.gs1ca.org/app_invoices/onlinePayment/Display.aspx",
    }

    constructor() {
        super(Gs1CanadaCollector.CONFIG);
    }
}
