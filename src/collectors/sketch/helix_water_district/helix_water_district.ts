
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HelixWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "helix_water_district",
        name: "Helix Water District",
        description: "i18n.collectors.helix_water_district.description",
        version: "0",
        website: "https://css.helixwater.org/hwdcss/JSP/accountTransactions.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83347.jpg",
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
        loginUrl: "https://css.helixwater.org/hwdcss/JSP/accountTransactions.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HelixWaterDistrictCollector.CONFIG);
    }
}
