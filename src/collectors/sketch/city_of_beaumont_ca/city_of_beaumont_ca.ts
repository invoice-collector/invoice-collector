
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfBeaumontCaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_beaumont_ca",
        name: "City of Beaumont CA",
        description: "i18n.collectors.city_of_beaumont_ca.description",
        version: "0",
        website: "https://beaumontca.municipalonlinepayments.com/beaumontca/utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724339.jpg",
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
        loginUrl: "https://beaumontca.municipalonlinepayments.com/beaumontca/utilities",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfBeaumontCaCollector.CONFIG);
    }
}
