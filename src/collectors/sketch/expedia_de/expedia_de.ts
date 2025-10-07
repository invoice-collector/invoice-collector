
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ExpediaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "expedia_de",
        name: "Expedia.de",
        description: "i18n.collectors.expedia_de.description",
        version: "0",
        website: "https://www.expedia.de/trips/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/442.jpg",
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
        entryUrl: "https://www.expedia.de/trips/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ExpediaDeCollector.CONFIG);
    }
}
