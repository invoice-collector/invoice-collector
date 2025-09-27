
import { SketchCollector } from '../../sketchCollector';

export class HelixWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "helix_water_district",
        name: "Helix Water District",
        description: "i18n.collectors.helix_water_district.description",
        version: "0",
        website: "https://css.helixwater.org/hwdcss/JSP/accountTransactions.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83347.jpg",
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
        entryUrl: "https://css.helixwater.org/hwdcss/JSP/accountTransactions.jsp",
    }

    constructor() {
        super(HelixWaterDistrictCollector.CONFIG);
    }
}
