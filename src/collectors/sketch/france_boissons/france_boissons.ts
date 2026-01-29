
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FranceBoissonsCollector extends SketchCollector {

    static CONFIG = {
        id: "france_boissons",
        name: "France Boissons",
        description: "i18n.collectors.france_boissons.description",
        version: "0",
        website: "https://www.myfranceboissons.fr/hfr/fr/EUR/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222808.jpg",
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
        loginUrl: "https://www.myfranceboissons.fr/hfr/fr/EUR/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FranceBoissonsCollector.CONFIG);
    }
}
