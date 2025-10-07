
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Sim24Collector extends SketchCollector {

    static CONFIG = {
        id: "sim24",
        name: "Sim24",
        description: "i18n.collectors.sim24.description",
        version: "0",
        website: "https://service.sim24.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3131873.jpg",
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
        entryUrl: "https://service.sim24.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Sim24Collector.CONFIG);
    }
}
