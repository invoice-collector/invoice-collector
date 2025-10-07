
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GazelEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "gazel_energie",
        name: "GAZEL ENERGIE",
        description: "i18n.collectors.gazel_energie.description",
        version: "0",
        website: "https://dispatching.gazelenergie.fr/WebClient/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1376424.jpg",
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
        entryUrl: "https://dispatching.gazelenergie.fr/WebClient/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GazelEnergieCollector.CONFIG);
    }
}
