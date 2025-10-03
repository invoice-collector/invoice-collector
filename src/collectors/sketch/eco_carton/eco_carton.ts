
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EcoCartonCollector extends SketchCollector {

    static CONFIG = {
        id: "eco_carton",
        name: "Eco-carton",
        description: "i18n.collectors.eco_carton.description",
        version: "0",
        website: "https://www.ecocarton.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118710.jpg",
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
        entryUrl: "https://www.ecocarton.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EcoCartonCollector.CONFIG);
    }
}
