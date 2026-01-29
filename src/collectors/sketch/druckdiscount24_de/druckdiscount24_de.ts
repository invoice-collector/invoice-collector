
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Druckdiscount24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "druckdiscount24_de",
        name: "DruckDiscount24.de",
        description: "i18n.collectors.druckdiscount24_de.description",
        version: "0",
        website: "https://www.druckdiscount24.de/de/ShoppingCart/ShowOrder/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6027.jpg",
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
        loginUrl: "https://www.druckdiscount24.de/de/ShoppingCart/ShowOrder/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Druckdiscount24DeCollector.CONFIG);
    }
}
