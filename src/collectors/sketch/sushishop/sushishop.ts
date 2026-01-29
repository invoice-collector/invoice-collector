
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SushishopCollector extends SketchCollector {

    static CONFIG = {
        id: "sushishop",
        name: "SushiShop",
        description: "i18n.collectors.sushishop.description",
        version: "0",
        website: "https://www.sushishop.fr/fr/authentification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123504.jpg",
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
        loginUrl: "https://www.sushishop.fr/fr/authentification",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SushishopCollector.CONFIG);
    }
}
