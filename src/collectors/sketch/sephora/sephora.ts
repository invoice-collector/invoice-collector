
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SephoraCollector extends SketchCollector {

    static CONFIG = {
        id: "sephora",
        name: "Sephora",
        description: "i18n.collectors.sephora.description",
        version: "0",
        website: "https://www.sephora.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122728.jpg",
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
        entryUrl: "https://www.sephora.fr/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SephoraCollector.CONFIG);
    }
}
