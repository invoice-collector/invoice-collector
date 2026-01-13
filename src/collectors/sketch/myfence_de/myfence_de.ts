
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyfenceDeCollector extends SketchCollector {

    static CONFIG = {
        id: "myfence_de",
        name: "myfence.de",
        description: "i18n.collectors.myfence_de.description",
        version: "0",
        website: "https://www.myfence.de/authentifizierung?back=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50383.jpg",
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
        loginUrl: "https://www.myfence.de/authentifizierung?back=history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyfenceDeCollector.CONFIG);
    }
}
