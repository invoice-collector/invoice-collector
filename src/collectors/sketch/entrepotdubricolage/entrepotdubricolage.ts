import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EntrepotDuBricolageCollector extends SketchCollector {

    static CONFIG = {
        id: "entrepotdubricolage",
        name: "Entrepôt du bricolage",
        description: "i18n.collectors.entrepotdubricolage.description",
        version: "0",
        website: "https://entrepot-du-bricolage.fr",
        logo: "https://blog.entrepot-du-bricolage.fr/app/themes/entrepot-du-bricolage/dist/img/logo.svg",
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
        loginUrl: "https://www.entrepot-du-bricolage.fr/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EntrepotDuBricolageCollector.CONFIG);
    }
}
