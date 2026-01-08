
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GravisCollector extends SketchCollector {

    static CONFIG = {
        id: "gravis",
        name: "Gravis",
        description: "i18n.collectors.gravis.description",
        version: "0",
        website: "http://www.gravis.de/index.php?cl=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517.jpg",
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
        loginUrl: "http://www.gravis.de/index.php?cl=account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GravisCollector.CONFIG);
    }
}
