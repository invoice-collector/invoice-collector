
import { SketchCollector } from '../../sketchCollector';

export class DvAbrechnungCollector extends SketchCollector {

    static CONFIG = {
        id: "dv_abrechnung",
        name: "DV Abrechnung",
        description: "i18n.collectors.dv_abrechnung.description",
        version: "0",
        website: "https://abrechnungplus.dv-portal.de/master-data?tab=2&page=1&itemsPerPage=15&sortBy%5B0%5D=voucherDate&sortDesc%5B0%5D=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2862869.jpg",
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
        entryUrl: "https://abrechnungplus.dv-portal.de/master-data?tab=2&page=1&itemsPerPage=15&sortBy%5B0%5D=voucherDate&sortDesc%5B0%5D=true",
    }

    constructor() {
        super(DvAbrechnungCollector.CONFIG);
    }
}
