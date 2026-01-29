
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnveloppebulleCollector extends SketchCollector {

    static CONFIG = {
        id: "enveloppebulle",
        name: "EnveloppeBulle",
        description: "i18n.collectors.enveloppebulle.description",
        version: "0",
        website: "https://www.enveloppebulle.com/historique-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1961421.jpg",
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
        loginUrl: "https://www.enveloppebulle.com/historique-commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnveloppebulleCollector.CONFIG);
    }
}
