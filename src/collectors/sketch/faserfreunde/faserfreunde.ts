
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FaserfreundeCollector extends SketchCollector {

    static CONFIG = {
        id: "faserfreunde",
        name: "Faserfreunde",
        description: "i18n.collectors.faserfreunde.description",
        version: "0",
        website: "https://kundenportal.faserfreunde.de/Home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417371.jpg",
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
        loginUrl: "https://kundenportal.faserfreunde.de/Home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FaserfreundeCollector.CONFIG);
    }
}
