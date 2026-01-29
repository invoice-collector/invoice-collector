
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfBocaRatonCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_boca_raton",
        name: "City of Boca Raton",
        description: "i18n.collectors.city_of_boca_raton.description",
        version: "0",
        website: "https://myubaccount.myboca.us/app/capricorn?para=index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724338.jpg",
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
        loginUrl: "https://myubaccount.myboca.us/app/capricorn?para=index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfBocaRatonCollector.CONFIG);
    }
}
