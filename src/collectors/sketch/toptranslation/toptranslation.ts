
import { SketchCollector } from '../../sketchCollector';

export class ToptranslationCollector extends SketchCollector {

    static CONFIG = {
        id: "toptranslation",
        name: "Toptranslation",
        description: "i18n.collectors.toptranslation.description",
        version: "0",
        website: "https://www.toptranslation.com/de/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111993.jpg",
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
        entryUrl: "https://www.toptranslation.com/de/dashboard/invoices",
    }

    constructor() {
        super(ToptranslationCollector.CONFIG);
    }
}
