
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvuNetzCollector extends SketchCollector {

    static CONFIG = {
        id: "avu_netz",
        name: "AVU Netz",
        description: "i18n.collectors.avu_netz.description",
        version: "0",
        website: "https://portal.avu.de/powercommerce/avu/fo/portal/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488414.jpg",
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
        loginUrl: "https://portal.avu.de/powercommerce/avu/fo/portal/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvuNetzCollector.CONFIG);
    }
}
