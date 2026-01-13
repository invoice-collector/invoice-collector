
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BodenrichtwerteMunchenCollector extends SketchCollector {

    static CONFIG = {
        id: "bodenrichtwerte_munchen",
        name: "Bodenrichtwerte Munchen",
        description: "i18n.collectors.bodenrichtwerte_munchen.description",
        version: "0",
        website: "https://bodenrichtwerte-muenchen.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54578.jpg",
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
        loginUrl: "https://bodenrichtwerte-muenchen.de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BodenrichtwerteMunchenCollector.CONFIG);
    }
}
