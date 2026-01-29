
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfTampaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_tampa",
        name: "City of Tampa",
        description: "i18n.collectors.city_of_tampa.description",
        version: "0",
        website: "https://www.tampa.gov",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037295.jpg",
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
        loginUrl: "https://www.tampa.gov",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfTampaCollector.CONFIG);
    }
}
