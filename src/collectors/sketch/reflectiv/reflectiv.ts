import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class ReflectivCollector extends SketchCollector {

    static CONFIG = {
        id: "reflectiv",
        name: "Reflectiv",
        description: "i18n.collectors.reflectiv.description",
        version: "0",
        website: "https://www.reflectiv.com",
        logo: "https://www.reflectiv.com/logo.svg",
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
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ReflectivCollector.CONFIG);
    }
}
