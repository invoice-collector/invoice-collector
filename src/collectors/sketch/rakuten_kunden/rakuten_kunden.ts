
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RakutenKundenCollector extends SketchCollector {

    static CONFIG = {
        id: "rakuten_kunden",
        name: "Rakuten - Kunden",
        description: "i18n.collectors.rakuten_kunden.description",
        version: "0",
        website: "https://www.rakuten.de/kundenkonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39093.jpg",
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
        loginUrl: "https://www.rakuten.de/kundenkonto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RakutenKundenCollector.CONFIG);
    }
}
