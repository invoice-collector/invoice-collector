
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RexelCollector extends SketchCollector {

    static CONFIG = {
        id: "rexel",
        name: "Rexel",
        description: "i18n.collectors.rexel.description",
        version: "1",
        website: "https://www.rexel.de/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Rexel_logo.svg",
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
        loginUrl: "https://www.rexel.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RexelCollector.CONFIG);
    }
}
