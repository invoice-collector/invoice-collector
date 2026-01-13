
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AirbnbCollector extends SketchCollector {

    static CONFIG = {
        id: "airbnb",
        name: "Airbnb",
        description: "i18n.collectors.airbnb.description",
        version: "0",
        website: "https://www.airbnb.de/trips/upcoming",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6387.jpg",
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
        loginUrl: "https://www.airbnb.de/trips/upcoming",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirbnbCollector.CONFIG);
    }
}
