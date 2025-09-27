
import { SketchCollector } from '../../sketchCollector';

export class SslComCollector extends SketchCollector {

    static CONFIG = {
        id: "ssl_com",
        name: "SSL.com",
        description: "i18n.collectors.ssl_com.description",
        version: "0",
        website: "https://secure.ssl.com/team/a1a-1gtohvd/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2418839.jpg",
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
        entryUrl: "https://secure.ssl.com/team/a1a-1gtohvd/invoices",
    }

    constructor() {
        super(SslComCollector.CONFIG);
    }
}
