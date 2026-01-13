
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AssuranceMutuelleDesMotardsAvisDEcheanceCollector extends SketchCollector {

    static CONFIG = {
        id: "assurance_mutuelle_des_motards_avis_d_echeance",
        name: "Assurance Mutuelle des motards - Avis d\'echeance",
        description: "i18n.collectors.assurance_mutuelle_des_motards_avis_d_echeance.description",
        version: "0",
        website: "https://ext2.mutuelledesmotards.fr/cas/login?service=https%3A%2F%2Fext2.mutuelledesmotards.fr%2FEspaceSocietaireApplication-web%2Fapp%2Fj_spring_cas_security_check",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105205.jpg",
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
        loginUrl: "https://ext2.mutuelledesmotards.fr/cas/login?service=https%3A%2F%2Fext2.mutuelledesmotards.fr%2FEspaceSocietaireApplication-web%2Fapp%2Fj_spring_cas_security_check",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AssuranceMutuelleDesMotardsAvisDEcheanceCollector.CONFIG);
    }
}
