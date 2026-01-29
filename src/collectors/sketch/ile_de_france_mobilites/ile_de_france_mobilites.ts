import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IleDeFranceMobilitesCollector extends SketchCollector {

    static CONFIG = {
        id: "ile_de_france_mobilites",
        name: "Ile-de-France mobilités",
        description: "i18n.collectors.ile_de_france_mobilites.description",
        version: "0",
        website: "https://www.iledefrance-mobilites.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/ce/IdFMobilit%C3%A9s.svg",
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
        loginUrl: "https://mon-espace.iledefrance-mobilites.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IleDeFranceMobilitesCollector.CONFIG);
    }
}
