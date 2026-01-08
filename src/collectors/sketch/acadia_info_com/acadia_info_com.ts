import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AcadiaInfoComCollector extends SketchCollector {

    static CONFIG = {
        id: "acadia_info_com",
        name: "Acadia Info",
        description: "i18n.collectors.acadia_info_com.description",
        version: "0",
        website: "https://www.acadia-info.com",
        logo: "https://www.acadia-info.com/img/logo-17132544431.jpg",
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
        loginUrl: "https://www.acadia-info.com/connexion?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AcadiaInfoComCollector.CONFIG);
    }
}
