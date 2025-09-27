
import { SketchCollector } from '../../sketchCollector';

export class WibuCollector extends SketchCollector {

    static CONFIG = {
        id: "wibu",
        name: "WiBU",
        description: "i18n.collectors.wibu.description",
        version: "0",
        website: "https://www.wibu.care/de-de/customer/order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213215.jpg",
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
        entryUrl: "https://www.wibu.care/de-de/customer/order/",
    }

    constructor() {
        super(WibuCollector.CONFIG);
    }
}
