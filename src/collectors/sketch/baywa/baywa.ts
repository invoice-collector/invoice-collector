
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaywaCollector extends SketchCollector {

    static CONFIG = {
        id: "baywa",
        name: "BayWa",
        description: "i18n.collectors.baywa.description",
        version: "0",
        website: "https://www.baywa-baustoffe.de/b2b/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19776.jpg",
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
        entryUrl: "https://www.baywa-baustoffe.de/b2b/de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaywaCollector.CONFIG);
    }
}
