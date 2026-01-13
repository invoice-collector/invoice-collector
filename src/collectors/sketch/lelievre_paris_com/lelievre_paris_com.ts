
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LelievreParisComCollector extends SketchCollector {

    static CONFIG = {
        id: "lelievre_paris_com",
        name: "Lelièvre Paris",
        description: "i18n.collectors.lelievre_paris_com.description",
        version: "0",
        website: "https://lelievreparis.com/",
        logo: "https://cdn.brandfetch.io/idpbAn5ble/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1755178990181",
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
        loginUrl: "https://lelievreparis.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LelievreParisComCollector.CONFIG);
    }
}
