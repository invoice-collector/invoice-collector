
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Kassa24Collector extends SketchCollector {

    static CONFIG = {
        id: "kassa24",
        name: "kassa24",
        description: "i18n.collectors.kassa24.description",
        version: "0",
        website: "https://www.kassa24.at/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2740799.jpg",
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
        entryUrl: "https://www.kassa24.at/app/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Kassa24Collector.CONFIG);
    }
}
