
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeUlmCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_ulm",
        name: "Stadtwerke Ulm",
        description: "i18n.collectors.stadtwerke_ulm.description",
        version: "0",
        website: "https://www.swu.de/privatkunden/service/meine-swu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9163.jpg",
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
        entryUrl: "https://www.swu.de/privatkunden/service/meine-swu/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeUlmCollector.CONFIG);
    }
}
