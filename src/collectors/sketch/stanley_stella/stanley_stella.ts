
import { SketchCollector } from '../../sketchCollector';

export class StanleyStellaCollector extends SketchCollector {

    static CONFIG = {
        id: "stanley_stella",
        name: "STANLEY/STELLA",
        description: "i18n.collectors.stanley_stella.description",
        version: "0",
        website: "https://www.stanleystella.com/de-de/profile/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/943601.jpg",
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
        entryUrl: "https://www.stanleystella.com/de-de/profile/invoices/",
    }

    constructor() {
        super(StanleyStellaCollector.CONFIG);
    }
}
