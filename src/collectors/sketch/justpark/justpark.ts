
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JustparkCollector extends SketchCollector {

    static CONFIG = {
        id: "justpark",
        name: "JustPark",
        description: "i18n.collectors.justpark.description",
        version: "0",
        website: "https://www.justpark.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/383286.jpg",
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
        entryUrl: "https://www.justpark.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JustparkCollector.CONFIG);
    }
}
