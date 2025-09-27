
import { SketchCollector } from '../../sketchCollector';

export class GetmyinvoicesPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "getmyinvoices_partner",
        name: "GetMyInvoices Partner",
        description: "i18n.collectors.getmyinvoices_partner.description",
        version: "0",
        website: "https://partners.getmyinvoices.com/credits.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777207.jpg",
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
        entryUrl: "https://partners.getmyinvoices.com/credits.php",
    }

    constructor() {
        super(GetmyinvoicesPartnerCollector.CONFIG);
    }
}
