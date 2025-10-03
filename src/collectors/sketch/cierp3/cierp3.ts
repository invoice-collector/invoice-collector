
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Cierp3Collector extends SketchCollector {

    static CONFIG = {
        id: "cierp3",
        name: "cierp3",
        description: "i18n.collectors.cierp3.description",
        version: "0",
        website: "https://www.allgeier-it.de/404/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/557.jpg",
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
        entryUrl: "https://www.allgeier-it.de/404/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Cierp3Collector.CONFIG);
    }
}
