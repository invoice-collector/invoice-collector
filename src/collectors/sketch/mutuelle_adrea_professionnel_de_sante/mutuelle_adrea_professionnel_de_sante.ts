
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAdreaProfessionnelDeSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_adrea_professionnel_de_sante",
        name: "Mutuelle Adrea - Professionnel de Sante",
        description: "i18n.collectors.mutuelle_adrea_professionnel_de_sante.description",
        version: "0",
        website: "https://corporate.adrea.fr/professionnel-de-sante/espace-securise/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125694.jpg",
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
        entryUrl: "https://corporate.adrea.fr/professionnel-de-sante/espace-securise/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleAdreaProfessionnelDeSanteCollector.CONFIG);
    }
}
