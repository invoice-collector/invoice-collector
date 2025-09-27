
import { SketchCollector } from '../../sketchCollector';

export class SelleriseCollector extends SketchCollector {

    static CONFIG = {
        id: "sellerise",
        name: "Sellerise",
        description: "i18n.collectors.sellerise.description",
        version: "0",
        website: "https://sellerise.com/settings?section=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445920.jpg",
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
        entryUrl: "https://sellerise.com/settings?section=invoices",
    }

    constructor() {
        super(SelleriseCollector.CONFIG);
    }
}
