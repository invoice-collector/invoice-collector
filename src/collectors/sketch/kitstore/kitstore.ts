
import { SketchCollector } from '../../sketchCollector';

export class KitstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "kitstore",
        name: "Kitstore",
        description: "i18n.collectors.kitstore.description",
        version: "0",
        website: "https://www.kitstore.de/customer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2103915.jpg",
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
        entryUrl: "https://www.kitstore.de/customer/",
    }

    constructor() {
        super(KitstoreCollector.CONFIG);
    }
}
