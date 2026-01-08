
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrbnetCollector extends SketchCollector {

    static CONFIG = {
        id: "orbnet",
        name: "Orbnet",
        description: "i18n.collectors.orbnet.description",
        version: "0",
        website: "https://my.orbnet.de/account/downloads/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134681.jpg",
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
        loginUrl: "https://my.orbnet.de/account/downloads/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrbnetCollector.CONFIG);
    }
}
