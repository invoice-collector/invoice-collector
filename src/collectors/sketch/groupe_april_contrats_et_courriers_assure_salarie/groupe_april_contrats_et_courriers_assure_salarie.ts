
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GroupeAprilContratsEtCourriersAssureSalarieCollector extends SketchCollector {

    static CONFIG = {
        id: "groupe_april_contrats_et_courriers_assure_salarie",
        name: "Groupe April (contrats et courriers) - Assure salarie",
        description: "i18n.collectors.groupe_april_contrats_et_courriers_assure_salarie.description",
        version: "0",
        website: "https://espace-assures.april-entreprise-prevoyance.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106871.jpg",
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
        loginUrl: "https://espace-assures.april-entreprise-prevoyance.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GroupeAprilContratsEtCourriersAssureSalarieCollector.CONFIG);
    }
}
