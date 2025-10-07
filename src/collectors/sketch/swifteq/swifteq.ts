
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwifteqCollector extends SketchCollector {

    static CONFIG = {
        id: "swifteq",
        name: "Swifteq",
        description: "i18n.collectors.swifteq.description",
        version: "0",
        website: "https://agenthelper.swifteq.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4219815.jpg",
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
        entryUrl: "https://agenthelper.swifteq.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwifteqCollector.CONFIG);
    }
}
