import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaCafetiereCatalaneCollector extends SketchCollector {

    static CONFIG = {
        id: "lacafetierecatalane",
        name: "La Cafetière Catalane",
        description: "i18n.collectors.lacafetierecatalane.description",
        version: "0",
        website: "https://www.lacafetierecatalane.com",
        logo: "https://www.lacafetierecatalane.com/img/m/1.jpg",
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
        loginUrl: "https://www.lacafetierecatalane.com/espace-client?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaCafetiereCatalaneCollector.CONFIG);
    }
}
