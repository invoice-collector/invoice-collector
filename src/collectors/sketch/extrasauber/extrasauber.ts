
import { SketchCollector } from '../../sketchCollector';

export class ExtrasauberCollector extends SketchCollector {

    static CONFIG = {
        id: "extrasauber",
        name: "ExtraSauber",
        description: "i18n.collectors.extrasauber.description",
        version: "0",
        website: "https://www.extrasauber.at/customer/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777839.jpg",
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
        entryUrl: "https://www.extrasauber.at/customer/invoices",
    }

    constructor() {
        super(ExtrasauberCollector.CONFIG);
    }
}
