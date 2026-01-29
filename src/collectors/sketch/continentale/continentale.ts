
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ContinentaleCollector extends SketchCollector {

    static CONFIG = {
        id: "continentale",
        name: "Continentale",
        description: "i18n.collectors.continentale.description",
        version: "0",
        website: "https://concorp.continentale.de/hr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669959.jpg",
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
        loginUrl: "https://concorp.continentale.de/hr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ContinentaleCollector.CONFIG);
    }
}
