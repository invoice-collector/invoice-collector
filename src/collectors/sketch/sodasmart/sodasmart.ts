
import { SketchCollector } from '../../sketchCollector';

export class SodasmartCollector extends SketchCollector {

    static CONFIG = {
        id: "sodasmart",
        name: "Sodasmart",
        description: "i18n.collectors.sodasmart.description",
        version: "0",
        website: "https://sodasmart.de/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525624.jpg",
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
        entryUrl: "https://sodasmart.de/my-account/",
    }

    constructor() {
        super(SodasmartCollector.CONFIG);
    }
}
