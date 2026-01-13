
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoffeenessCollector extends SketchCollector {

    static CONFIG = {
        id: "coffeeness",
        name: "Coffeeness",
        description: "i18n.collectors.coffeeness.description",
        version: "0",
        website: "https://shop.coffeeness.de/konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197519.jpg",
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
        loginUrl: "https://shop.coffeeness.de/konto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoffeenessCollector.CONFIG);
    }
}
