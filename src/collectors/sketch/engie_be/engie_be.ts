import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EngieBeCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_be",
        name: "Engie Particuliers (.be)",
        description: "i18n.collectors.engie.description",
        version: "0",
        website: "https://engie.be",
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/5c/Engie_logo.svg",
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
        loginUrl: "https://account.engie.be/u/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EngieBeCollector.CONFIG);
    }
}
