
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProalphaCollector extends SketchCollector {

    static CONFIG = {
        id: "proalpha",
        name: "proALPHA",
        description: "i18n.collectors.proalpha.description",
        version: "0",
        website: "https://www.proalpha.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556.jpg",
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
        entryUrl: "https://www.proalpha.com/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProalphaCollector.CONFIG);
    }
}
