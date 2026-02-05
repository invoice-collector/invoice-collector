import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TuroCollector extends SketchCollector {

    static CONFIG = {
        id: "turo",
        name: "Turo",
        description: "i18n.collectors.turo.description",
        version: "0",
        website: "https://turo.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Turo_%28company%29_logo.svg",
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
        loginUrl: "https://turo.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TuroCollector.CONFIG);
    }
}
