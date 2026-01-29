
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PinellasCountyUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "pinellas_county_utilities",
        name: "Pinellas County Utilities",
        description: "i18n.collectors.pinellas_county_utilities.description",
        version: "0",
        website: "http://www.pinellascounty.org",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8848.jpg",
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
        loginUrl: "http://www.pinellascounty.org",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PinellasCountyUtilitiesCollector.CONFIG);
    }
}
