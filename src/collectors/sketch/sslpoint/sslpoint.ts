
import { SketchCollector } from '../../sketchCollector';

export class SslpointCollector extends SketchCollector {

    static CONFIG = {
        id: "sslpoint",
        name: "SSLPOINT",
        description: "i18n.collectors.sslpoint.description",
        version: "0",
        website: "https://www.sslpoint.com/myorder/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11340.jpg",
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
        entryUrl: "https://www.sslpoint.com/myorder/clientarea.php?action=invoices",
    }

    constructor() {
        super(SslpointCollector.CONFIG);
    }
}
