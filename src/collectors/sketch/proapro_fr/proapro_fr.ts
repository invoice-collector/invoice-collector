
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProaProFrCollector extends SketchCollector {

    static CONFIG = {
        id: "proapro_fr",
        name: "Pro à Pro",
        description: "i18n.collectors.proapro_fr.description",
        version: "0",
        website: "https://www.proapro.fr/catalogue",
        logo: "https://www.proapro.fr/media/images/logo-pap-black.svg",
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
        loginUrl: "https://www.proapro.fr/catalogue",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProaProFrCollector.CONFIG);
    }
}
