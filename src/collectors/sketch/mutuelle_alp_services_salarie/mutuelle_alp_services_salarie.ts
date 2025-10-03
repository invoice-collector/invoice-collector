
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAlpServicesSalarieCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_alp_services_salarie",
        name: "Mutuelle Alp Services (Salarie)",
        description: "i18n.collectors.mutuelle_alp_services_salarie.description",
        version: "0",
        website: "http://www.april-entreprise.fr/accedez-a-votre-espace",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125690.jpg",
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
        entryUrl: "http://www.april-entreprise.fr/accedez-a-votre-espace",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleAlpServicesSalarieCollector.CONFIG);
    }
}
