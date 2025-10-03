
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGenerationCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_generation",
        name: "Mutuelle Generation",
        description: "i18n.collectors.mutuelle_generation.description",
        version: "0",
        website: "https://www.generation.fr/View/AccueilProSante.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129096.jpg",
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
        entryUrl: "https://www.generation.fr/View/AccueilProSante.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGenerationCollector.CONFIG);
    }
}
