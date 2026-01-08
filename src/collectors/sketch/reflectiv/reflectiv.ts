import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';
import { log } from 'console';

export class ReflectivCollector extends SketchCollector {

    static CONFIG = {
        id: "reflectiv",
        name: "Reflectiv",
        description: "i18n.collectors.reflectiv.description",
        version: "0",
        website: "https://www.reflectiv.com",
        logo: "https://www.reflectiv.com/img/reflectiv-logo-1639737546.jpg",
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
        loginUrl: "https://www.reflectiv.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReflectivCollector.CONFIG);
    }
}
