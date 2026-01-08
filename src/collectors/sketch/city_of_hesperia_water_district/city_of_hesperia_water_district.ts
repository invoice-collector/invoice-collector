
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfHesperiaWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_hesperia_water_district",
        name: "City of Hesperia Water District",
        description: "i18n.collectors.city_of_hesperia_water_district.description",
        version: "0",
        website: "https://billpay.onlinebiller.com/ebpp/hesperia/Payment/History",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724329.jpg",
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
        loginUrl: "https://billpay.onlinebiller.com/ebpp/hesperia/Payment/History",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfHesperiaWaterDistrictCollector.CONFIG);
    }
}
