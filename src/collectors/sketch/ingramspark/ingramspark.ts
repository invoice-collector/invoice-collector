
import { SketchCollector } from '../../sketchCollector';

export class IngramsparkCollector extends SketchCollector {

    static CONFIG = {
        id: "ingramspark",
        name: "IngramSpark",
        description: "i18n.collectors.ingramspark.description",
        version: "0",
        website: "https://myaccount.ingramspark.com/Orders/PreviousOrders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128536.jpg",
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
        entryUrl: "https://myaccount.ingramspark.com/Orders/PreviousOrders",
    }

    constructor() {
        super(IngramsparkCollector.CONFIG);
    }
}
