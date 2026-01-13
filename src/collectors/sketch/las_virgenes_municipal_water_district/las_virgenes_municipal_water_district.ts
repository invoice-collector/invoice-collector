
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LasVirgenesMunicipalWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "las_virgenes_municipal_water_district",
        name: "Las Virgenes Municipal Water District",
        description: "i18n.collectors.las_virgenes_municipal_water_district.description",
        version: "0",
        website: "https://www.invoicecloud.com/portal/(S(bx55lkn5pzfif1oi3cus4of1))/2/customerlogin.aspx?billerguid=12e2dd5f-b913-4946-8aba-d25cf4facb88",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176441.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://www.invoicecloud.com/portal/(S(bx55lkn5pzfif1oi3cus4of1))/2/customerlogin.aspx?billerguid=12e2dd5f-b913-4946-8aba-d25cf4facb88",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LasVirgenesMunicipalWaterDistrictCollector.CONFIG);
    }
}
