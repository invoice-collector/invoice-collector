
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _99designsDeCollector extends SketchCollector {

    static CONFIG = {
        id: "99designs_de",
        name: "99Designs.de",
        description: "i18n.collectors.99designs_de.description",
        version: "0",
        website: "https://99designs.de/work",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/431.jpg",
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
        entryUrl: "https://99designs.de/work",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_99designsDeCollector.CONFIG);
    }
}
