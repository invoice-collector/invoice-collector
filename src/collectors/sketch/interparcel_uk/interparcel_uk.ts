
import { SketchCollector } from '../../sketchCollector';

export class InterparcelUkCollector extends SketchCollector {

    static CONFIG = {
        id: "interparcel_uk",
        name: "Interparcel UK",
        description: "i18n.collectors.interparcel_uk.description",
        version: "0",
        website: "https://uk.interparcel.com/myaccount/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284736.jpg",
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
        entryUrl: "https://uk.interparcel.com/myaccount/orders/",
    }

    constructor() {
        super(InterparcelUkCollector.CONFIG);
    }
}
