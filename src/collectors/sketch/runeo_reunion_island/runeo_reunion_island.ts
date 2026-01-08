
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RuneoReunionIslandCollector extends SketchCollector {

    static CONFIG = {
        id: "runeo_reunion_island",
        name: "Runeo Reunion Island",
        description: "i18n.collectors.runeo_reunion_island.description",
        version: "0",
        website: "https://www.runeo.re/espace-client/connexion.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/238955.jpg",
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
        loginUrl: "https://www.runeo.re/espace-client/connexion.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RuneoReunionIslandCollector.CONFIG);
    }
}
