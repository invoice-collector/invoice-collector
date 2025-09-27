
import { SketchCollector } from '../../sketchCollector';

export class DuluxBusinessPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "dulux_business_plus",
        name: "Dulux Business Plus",
        description: "i18n.collectors.dulux_business_plus.description",
        version: "0",
        website: "https://www.duluxbusinessplus.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91020.jpg",
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
        entryUrl: "https://www.duluxbusinessplus.com.au",
    }

    constructor() {
        super(DuluxBusinessPlusCollector.CONFIG);
    }
}
