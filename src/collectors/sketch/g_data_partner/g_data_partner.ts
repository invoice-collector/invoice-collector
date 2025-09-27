
import { SketchCollector } from '../../sketchCollector';

export class GDataPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "g_data_partner",
        name: "G Data Partner",
        description: "i18n.collectors.g_data_partner.description",
        version: "0",
        website: "https://partner.gdata.de/app/shop/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445730.jpg",
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
        entryUrl: "https://partner.gdata.de/app/shop/invoices",
    }

    constructor() {
        super(GDataPartnerCollector.CONFIG);
    }
}
