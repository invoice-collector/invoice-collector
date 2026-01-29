
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChronofreshEfacturesCollector extends SketchCollector {

    static CONFIG = {
        id: "chronofresh_efactures",
        name: "Chronofresh eFactures",
        description: "i18n.collectors.chronofresh_efactures.description",
        version: "0",
        website: "https://chronofresh.e-facture.net/esp_ent/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052858.jpg",
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
        loginUrl: "https://chronofresh.e-facture.net/esp_ent/index.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ChronofreshEfacturesCollector.CONFIG);
    }
}
