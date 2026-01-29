
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfFortCollinsUtilityCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_fort_collins_utility",
        name: "City of Fort Collins Utility",
        description: "i18n.collectors.city_of_fort_collins_utility.description",
        version: "0",
        website: "https://secure8.i-doxs.net/CityOfFortCollins/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409742.jpg",
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
        loginUrl: "https://secure8.i-doxs.net/CityOfFortCollins/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfFortCollinsUtilityCollector.CONFIG);
    }
}
