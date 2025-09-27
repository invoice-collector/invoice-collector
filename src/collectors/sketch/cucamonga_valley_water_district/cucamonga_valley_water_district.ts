
import { SketchCollector } from '../../sketchCollector';

export class CucamongaValleyWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "cucamonga_valley_water_district",
        name: "Cucamonga Valley Water District",
        description: "i18n.collectors.cucamonga_valley_water_district.description",
        version: "0",
        website: "https://www.invoicecloud.com/portal/(S(tljikpfetqc3ipbjw2r4x3ou))/2/CustomerGroupLedger.aspx?mode=closed",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723593.jpg",
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
        entryUrl: "https://www.invoicecloud.com/portal/(S(tljikpfetqc3ipbjw2r4x3ou))/2/CustomerGroupLedger.aspx?mode=closed",
    }

    constructor() {
        super(CucamongaValleyWaterDistrictCollector.CONFIG);
    }
}
