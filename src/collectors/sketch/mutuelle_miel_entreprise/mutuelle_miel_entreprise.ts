
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMielEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_miel_entreprise",
        name: "Mutuelle Miel - Entreprise",
        description: "i18n.collectors.mutuelle_miel_entreprise.description",
        version: "0",
        website: "https://espacesecurise.mielmut.fr/espace-entreprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130348.jpg",
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
        loginUrl: "https://espacesecurise.mielmut.fr/espace-entreprise",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleMielEntrepriseCollector.CONFIG);
    }
}
