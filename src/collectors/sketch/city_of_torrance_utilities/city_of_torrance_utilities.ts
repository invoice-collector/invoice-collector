
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfTorranceUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_torrance_utilities",
        name: "City Of Torrance Utilities",
        description: "i18n.collectors.city_of_torrance_utilities.description",
        version: "0",
        website: "https://torranceca.myutilitydirect.com/customerportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176442.jpg",
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
        loginUrl: "https://torranceca.myutilitydirect.com/customerportal/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfTorranceUtilitiesCollector.CONFIG);
    }
}
