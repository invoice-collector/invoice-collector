
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CofidisMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "cofidis_mobile",
        name: "Cofidis Mobile",
        description: "i18n.collectors.cofidis_mobile.description",
        version: "0",
        website: "https://www.cofidis.fr/fr/espace-client/identification.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135058.jpg",
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
        loginUrl: "https://www.cofidis.fr/fr/espace-client/identification.cgi",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CofidisMobileCollector.CONFIG);
    }
}
