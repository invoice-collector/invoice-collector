import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IstaCollector extends SketchCollector {

    static CONFIG = {
        id: "ista",
        name: "Ista",
        description: "i18n.collectors.ista.description",
        version: "0",
        website: "https://ista.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Ista-logo.svg",
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
        loginUrl: "https://portal.ista.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IstaCollector.CONFIG);
    }
}
