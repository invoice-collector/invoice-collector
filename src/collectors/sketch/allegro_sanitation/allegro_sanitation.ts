
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllegroSanitationCollector extends SketchCollector {

    static CONFIG = {
        id: "allegro_sanitation",
        name: "Allegro Sanitation",
        description: "i18n.collectors.allegro_sanitation.description",
        version: "0",
        website: "https://asc.onlineportal.us.com/User/Login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798679.jpg",
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
        loginUrl: "https://asc.onlineportal.us.com/User/Login?ReturnUrl=%2f",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllegroSanitationCollector.CONFIG);
    }
}
