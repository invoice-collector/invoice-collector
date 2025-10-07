
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Chrono24Collector extends SketchCollector {

    static CONFIG = {
        id: "chrono24",
        name: "chrono24",
        description: "i18n.collectors.chrono24.description",
        version: "0",
        website: "https://www.chrono24.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33315.jpg",
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
        entryUrl: "https://www.chrono24.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Chrono24Collector.CONFIG);
    }
}
