
import { SketchCollector } from '../../sketchCollector';

export class TrustindexCollector extends SketchCollector {

    static CONFIG = {
        id: "trustindex",
        name: "Trustindex",
        description: "i18n.collectors.trustindex.description",
        version: "0",
        website: "https://admin.trustindex.io/payment/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3110550.jpg",
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
        entryUrl: "https://admin.trustindex.io/payment/history",
    }

    constructor() {
        super(TrustindexCollector.CONFIG);
    }
}
