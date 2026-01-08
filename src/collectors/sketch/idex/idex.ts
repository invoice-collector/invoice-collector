import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IdexCollector extends SketchCollector {

    static CONFIG = {
        id: "idex",
        name: "Idex",
        description: "i18n.collectors.idex.description",
        version: "0",
        website: "https://idex.fr",
        logo: "https://www.idex.fr/themes/custom/drup_theme/logo-en-color.svg",
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
        loginUrl: "https://espaceclient.idex.fr/web/guest/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdexCollector.CONFIG);
    }
}
