
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfAirdrieCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_airdrie",
        name: "City of Airdrie",
        description: "i18n.collectors.city_of_airdrie.description",
        version: "0",
        website: "https://www.airdrie.ca/index.cfm?serviceID=1104",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23372.jpg",
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
        loginUrl: "https://www.airdrie.ca/index.cfm?serviceID=1104",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfAirdrieCollector.CONFIG);
    }
}
