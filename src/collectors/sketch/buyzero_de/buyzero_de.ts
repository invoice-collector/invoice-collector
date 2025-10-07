
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BuyzeroDeCollector extends SketchCollector {

    static CONFIG = {
        id: "buyzero_de",
        name: "buyzero.de",
        description: "i18n.collectors.buyzero_de.description",
        version: "0",
        website: "https://buyzero.de/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060570.jpg",
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
        entryUrl: "https://buyzero.de/en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BuyzeroDeCollector.CONFIG);
    }
}
