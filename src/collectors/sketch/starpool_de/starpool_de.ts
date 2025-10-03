
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StarpoolDeCollector extends SketchCollector {

    static CONFIG = {
        id: "starpool_de",
        name: "Starpool.de",
        description: "i18n.collectors.starpool_de.description",
        version: "0",
        website: "https://www.starpool.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150505.jpg",
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
        entryUrl: "https://www.starpool.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StarpoolDeCollector.CONFIG);
    }
}
