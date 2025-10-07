
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchmetterlingInternationalCollector extends SketchCollector {

    static CONFIG = {
        id: "schmetterling_international",
        name: "Schmetterling International",
        description: "i18n.collectors.schmetterling_international.description",
        version: "0",
        website: "https://app.schmetterling-argus.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698586.jpg",
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
        entryUrl: "https://app.schmetterling-argus.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchmetterlingInternationalCollector.CONFIG);
    }
}
