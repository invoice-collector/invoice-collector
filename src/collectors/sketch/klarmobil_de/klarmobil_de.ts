
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KlarmobilDeCollector extends SketchCollector {

    static CONFIG = {
        id: "klarmobil_de",
        name: "klarmobil.de",
        description: "i18n.collectors.klarmobil_de.description",
        version: "0",
        website: "https://www.klarmobil.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7524.jpg",
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
        loginUrl: "https://www.klarmobil.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlarmobilDeCollector.CONFIG);
    }
}
