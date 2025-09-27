
import { SketchCollector } from '../../sketchCollector';

export class FloordirektCollector extends SketchCollector {

    static CONFIG = {
        id: "floordirekt",
        name: "floordirekt",
        description: "i18n.collectors.floordirekt.description",
        version: "0",
        website: "https://www.floordirekt.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23104.jpg",
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
        entryUrl: "https://www.floordirekt.de/customer/account/login/",
    }

    constructor() {
        super(FloordirektCollector.CONFIG);
    }
}
