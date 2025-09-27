
import { SketchCollector } from '../../sketchCollector';

export class PantoneCollector extends SketchCollector {

    static CONFIG = {
        id: "pantone",
        name: "Pantone",
        description: "i18n.collectors.pantone.description",
        version: "0",
        website: "https://www.pantone.com/hk/en/customer/account/create",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035298.jpg",
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
        entryUrl: "https://www.pantone.com/hk/en/customer/account/create",
    }

    constructor() {
        super(PantoneCollector.CONFIG);
    }
}
