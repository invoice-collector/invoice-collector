
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlaconiCollector extends SketchCollector {

    static CONFIG = {
        id: "flaconi",
        name: "Flaconi",
        description: "i18n.collectors.flaconi.description",
        version: "0",
        website: "https://www.flaconi.de/konto/anmelden/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201929.jpg",
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
        loginUrl: "https://www.flaconi.de/konto/anmelden/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlaconiCollector.CONFIG);
    }
}
