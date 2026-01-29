
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreativeFabricaCollector extends SketchCollector {

    static CONFIG = {
        id: "creative_fabrica",
        name: "Creative Fabrica",
        description: "i18n.collectors.creative_fabrica.description",
        version: "0",
        website: "https://www.creativefabrica.com/de/my-account/subscriptions/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510850.jpg",
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
        loginUrl: "https://www.creativefabrica.com/de/my-account/subscriptions/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreativeFabricaCollector.CONFIG);
    }
}
