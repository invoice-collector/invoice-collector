
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PalmBeachCountyWaterPbcCollector extends SketchCollector {

    static CONFIG = {
        id: "palm_beach_county_water_pbc",
        name: "Palm Beach County Water - PBC",
        description: "i18n.collectors.palm_beach_county_water_pbc.description",
        version: "0",
        website: "https://ebill.pbcwater.com/billing/viewbillUI.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723374.jpg",
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
        loginUrl: "https://ebill.pbcwater.com/billing/viewbillUI.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PalmBeachCountyWaterPbcCollector.CONFIG);
    }
}
