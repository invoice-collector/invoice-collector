
import { SketchCollector } from '../../sketchCollector';

export class SeopressCollector extends SketchCollector {

    static CONFIG = {
        id: "seopress",
        name: "SEOPress",
        description: "i18n.collectors.seopress.description",
        version: "0",
        website: "https://www.seopress.org/checkout/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121136.jpg",
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
        entryUrl: "https://www.seopress.org/checkout/purchase-history/",
    }

    constructor() {
        super(SeopressCollector.CONFIG);
    }
}
