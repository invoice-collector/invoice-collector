
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DecathlonCollector extends SketchCollector {

    static CONFIG = {
        id: "decathlon",
        name: "DECATHLON",
        description: "i18n.collectors.decathlon.description",
        version: "1",
        website: "https://www.decathlon.de/login",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Decathlon_-_logo_%28France%2C_2024%29.svg",
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
        loginUrl: "https://www.decathlon.de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DecathlonCollector.CONFIG);
    }
}
