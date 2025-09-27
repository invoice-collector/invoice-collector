
import { SketchCollector } from '../../sketchCollector';

export class BilendoCollector extends SketchCollector {

    static CONFIG = {
        id: "bilendo",
        name: "Bilendo",
        description: "i18n.collectors.bilendo.description",
        version: "0",
        website: "https://www.bilendo.de/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28555.jpg",
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
        entryUrl: "https://www.bilendo.de/users/sign_in",
    }

    constructor() {
        super(BilendoCollector.CONFIG);
    }
}
