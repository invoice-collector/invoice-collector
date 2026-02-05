
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAgpmAvisEcheancesCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_agpm_avis_echeances",
        name: "Mutuelle AGPM (avis echeances)",
        description: "i18n.collectors.mutuelle_agpm_avis_echeances.description",
        version: "0",
        website: "https://www.agpm.fr/espace-adherent/connexion/espace-adherent-faq.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125843.jpg",
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
        loginUrl: "https://www.agpm.fr/espace-adherent/connexion/espace-adherent-faq.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleAgpmAvisEcheancesCollector.CONFIG);
    }
}
