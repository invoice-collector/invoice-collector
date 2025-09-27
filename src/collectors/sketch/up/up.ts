
import { SketchCollector } from '../../sketchCollector';

export class UpCollector extends SketchCollector {

    static CONFIG = {
        id: "up",
        name: "Up",
        description: "i18n.collectors.up.description",
        version: "0",
        website: "https://moncommerce.up.coop/acdce77d-6280-436b-9d39-69f3ec9fe7e6/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2104117.jpg",
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
        entryUrl: "https://moncommerce.up.coop/acdce77d-6280-436b-9d39-69f3ec9fe7e6/billing",
    }

    constructor() {
        super(UpCollector.CONFIG);
    }
}
