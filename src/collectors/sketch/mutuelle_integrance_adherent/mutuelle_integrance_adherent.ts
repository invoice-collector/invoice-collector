
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIntegranceAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_integrance_adherent",
        name: "Mutuelle Integrance - Adherent",
        description: "i18n.collectors.mutuelle_integrance_adherent.description",
        version: "0",
        website: "https://sante.integrance.fr/iAdherent",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129543.jpg",
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
        loginUrl: "https://sante.integrance.fr/iAdherent",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleIntegranceAdherentCollector.CONFIG);
    }
}
