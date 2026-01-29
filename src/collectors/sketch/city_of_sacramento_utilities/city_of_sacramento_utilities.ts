
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfSacramentoUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_sacramento_utilities",
        name: "City of Sacramento Utilities",
        description: "i18n.collectors.city_of_sacramento_utilities.description",
        version: "0",
        website: "https://secure8.i-doxs.net/CityofSacramento/Secure/Home.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70095.jpg",
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
        loginUrl: "https://secure8.i-doxs.net/CityofSacramento/Secure/Home.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfSacramentoUtilitiesCollector.CONFIG);
    }
}
