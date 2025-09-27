
import { SketchCollector } from '../../sketchCollector';

export class SslmarketCollector extends SketchCollector {

    static CONFIG = {
        id: "sslmarket",
        name: "SSLmarket",
        description: "i18n.collectors.sslmarket.description",
        version: "0",
        website: "https://www.sslmarket.de/customer/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15277.jpg",
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
        entryUrl: "https://www.sslmarket.de/customer/login/",
    }

    constructor() {
        super(SslmarketCollector.CONFIG);
    }
}
