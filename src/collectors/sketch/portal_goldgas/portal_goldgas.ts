
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PortalGoldgasCollector extends SketchCollector {

    static CONFIG = {
        id: "portal_goldgas",
        name: "portal.goldgas",
        description: "i18n.collectors.portal_goldgas.description",
        version: "0",
        website: "https://portal.goldgas.de/registrierung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525069.jpg",
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
        loginUrl: "https://portal.goldgas.de/registrierung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PortalGoldgasCollector.CONFIG);
    }
}
