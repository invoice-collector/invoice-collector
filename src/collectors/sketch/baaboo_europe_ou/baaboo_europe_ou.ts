
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BaabooEuropeOuCollector extends SketchCollector {

    static CONFIG = {
        id: "baaboo_europe_ou",
        name: "baaboo Europe OU",
        description: "i18n.collectors.baaboo_europe_ou.description",
        version: "0",
        website: "https://baaboo.shop/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/568098.jpg",
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
        loginUrl: "https://baaboo.shop/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaabooEuropeOuCollector.CONFIG);
    }
}
