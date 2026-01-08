
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CorsizioCollector extends SketchCollector {

    static CONFIG = {
        id: "corsizio",
        name: "Corsizio",
        description: "i18n.collectors.corsizio.description",
        version: "0",
        website: "https://manager.corsizio.com/attendees",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336514.jpg",
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
        loginUrl: "https://manager.corsizio.com/attendees",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CorsizioCollector.CONFIG);
    }
}
