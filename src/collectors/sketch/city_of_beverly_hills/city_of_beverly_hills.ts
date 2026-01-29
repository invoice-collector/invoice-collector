
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfBeverlyHillsCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_beverly_hills",
        name: "City of Beverly Hills",
        description: "i18n.collectors.city_of_beverly_hills.description",
        version: "0",
        website: "https://idp.beverlyhills.org/ui/clogin.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178596.jpg",
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
        loginUrl: "https://idp.beverlyhills.org/ui/clogin.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfBeverlyHillsCollector.CONFIG);
    }
}
