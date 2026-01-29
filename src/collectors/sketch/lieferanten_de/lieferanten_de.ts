
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LieferantenDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lieferanten_de",
        name: "Lieferanten.de",
        description: "i18n.collectors.lieferanten_de.description",
        version: "0",
        website: "https://www.lieferanten.de/#loginBox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/816538.jpg",
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
        loginUrl: "https://www.lieferanten.de/#loginBox",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LieferantenDeCollector.CONFIG);
    }
}
