
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KlipfolioCollector extends SketchCollector {

    static CONFIG = {
        id: "klipfolio",
        name: "Klipfolio",
        description: "i18n.collectors.klipfolio.description",
        version: "0",
        website: "https://app.klipfolio.com/company/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6718.jpg",
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
        loginUrl: "https://app.klipfolio.com/company/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlipfolioCollector.CONFIG);
    }
}
