
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EstugoCollector extends SketchCollector {

    static CONFIG = {
        id: "estugo",
        name: "ESTUGO",
        description: "i18n.collectors.estugo.description",
        version: "0",
        website: "https://hera.estugo.de:8443/login_up.php?success_redirect_url=%2Fsmb%2Fweb%2Fview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55429.jpg",
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
        loginUrl: "https://hera.estugo.de:8443/login_up.php?success_redirect_url=%2Fsmb%2Fweb%2Fview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EstugoCollector.CONFIG);
    }
}
