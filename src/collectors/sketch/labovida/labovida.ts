import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';
import { log } from 'console';

export class LaBovidaCollector extends SketchCollector {

    static CONFIG = {
        id: "labovida",
        name: "La Bovida",
        description: "i18n.collectors.labovida.description",
        version: "0",
        website: "https://www.labovida.com",
        logo: "https://www.labovida.com/themes/axome/assets/img//svg/logo.svg",
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
        loginUrl: "https://www.labovida.com/connexion?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaBovidaCollector.CONFIG);
    }
}
