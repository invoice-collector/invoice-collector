
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GeneraliEspaceEpargneCollector extends SketchCollector {

    static CONFIG = {
        id: "generali_espace_epargne",
        name: "Generali - Espace epargne",
        description: "i18n.collectors.generali_espace_epargne.description",
        version: "0",
        website: "https://espace-epargne.generali.fr/b2b2c/entreesite/EntAccLog?ssbouCode=8000857",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106588.jpg",
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
        entryUrl: "https://espace-epargne.generali.fr/b2b2c/entreesite/EntAccLog?ssbouCode=8000857",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeneraliEspaceEpargneCollector.CONFIG);
    }
}
