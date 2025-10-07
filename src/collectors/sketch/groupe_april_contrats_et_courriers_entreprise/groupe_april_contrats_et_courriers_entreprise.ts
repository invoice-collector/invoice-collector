
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GroupeAprilContratsEtCourriersEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "groupe_april_contrats_et_courriers_entreprise",
        name: "Groupe April (contrats et courriers) - Entreprise",
        description: "i18n.collectors.groupe_april_contrats_et_courriers_entreprise.description",
        version: "0",
        website: "https://espace-entreprises-collectives.april-sante-prevoyance.fr/Authentification/tabid/62/Default.aspx?returnurl=%2fDefault.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106872.jpg",
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
        entryUrl: "https://espace-entreprises-collectives.april-sante-prevoyance.fr/Authentification/tabid/62/Default.aspx?returnurl=%2fDefault.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GroupeAprilContratsEtCourriersEntrepriseCollector.CONFIG);
    }
}
