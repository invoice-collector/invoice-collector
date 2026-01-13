
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfLomaLindaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_loma_linda",
        name: "City of Loma Linda",
        description: "i18n.collectors.city_of_loma_linda.description",
        version: "0",
        website: "https://selfservice.lomalinda-ca.gov/css/citizens/UtilityBilling/ViewPayBills.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724317.jpg",
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
        loginUrl: "https://selfservice.lomalinda-ca.gov/css/citizens/UtilityBilling/ViewPayBills.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfLomaLindaCollector.CONFIG);
    }
}
