
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SilbersaitenCollector extends SketchCollector {

    static CONFIG = {
        id: "silbersaiten",
        name: "Silbersaiten",
        description: "i18n.collectors.silbersaiten.description",
        version: "0",
        website: "https://www.silbersaiten.de/prestashop/de/bestellungsverlauf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81311.jpg",
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
        loginUrl: "https://www.silbersaiten.de/prestashop/de/bestellungsverlauf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SilbersaitenCollector.CONFIG);
    }
}
