
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AcesDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "aces_direct",
        name: "ACES Direct",
        description: "i18n.collectors.aces_direct.description",
        version: "0",
        website: "https://www.acesdirect.nl/inloggen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32749.jpg",
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
        loginUrl: "https://www.acesdirect.nl/inloggen/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AcesDirectCollector.CONFIG);
    }
}
