
import { SketchCollector } from '../../sketchCollector';

export class IpstackCollector extends SketchCollector {

    static CONFIG = {
        id: "ipstack",
        name: "ipstack",
        description: "i18n.collectors.ipstack.description",
        version: "0",
        website: "https://ipstack.com/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107032.jpg",
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
        entryUrl: "https://ipstack.com/payment",
    }

    constructor() {
        super(IpstackCollector.CONFIG);
    }
}
