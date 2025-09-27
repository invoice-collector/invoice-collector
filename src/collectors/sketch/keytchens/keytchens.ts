
import { SketchCollector } from '../../sketchCollector';

export class KeytchensCollector extends SketchCollector {

    static CONFIG = {
        id: "keytchens",
        name: "Keytchens",
        description: "i18n.collectors.keytchens.description",
        version: "0",
        website: "https://keytchens.app/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4189556.jpg",
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
        entryUrl: "https://keytchens.app/invoices",
    }

    constructor() {
        super(KeytchensCollector.CONFIG);
    }
}
