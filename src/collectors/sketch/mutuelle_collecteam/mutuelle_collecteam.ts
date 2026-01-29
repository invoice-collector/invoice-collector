
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleCollecteamCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_collecteam",
        name: "Mutuelle CollecTeam",
        description: "i18n.collectors.mutuelle_collecteam.description",
        version: "0",
        website: "https://www.collecteam.fr/espace-client/connexion-a-l-espace-client.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127683.jpg",
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
        loginUrl: "https://www.collecteam.fr/espace-client/connexion-a-l-espace-client.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleCollecteamCollector.CONFIG);
    }
}
