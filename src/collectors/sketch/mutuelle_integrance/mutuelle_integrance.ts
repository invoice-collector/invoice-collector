
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIntegranceCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_integrance",
        name: "Mutuelle Integrance",
        description: "i18n.collectors.mutuelle_integrance.description",
        version: "0",
        website: "https://www.integrance.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129072.jpg",
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
        entryUrl: "https://www.integrance.fr/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleIntegranceCollector.CONFIG);
    }
}
