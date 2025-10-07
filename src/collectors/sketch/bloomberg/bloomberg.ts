
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BloombergCollector extends SketchCollector {

    static CONFIG = {
        id: "bloomberg",
        name: "Bloomberg",
        description: "i18n.collectors.bloomberg.description",
        version: "0",
        website: "https://www.bloomberg.com/account/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/828291.jpg",
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
        entryUrl: "https://www.bloomberg.com/account/subscriptions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BloombergCollector.CONFIG);
    }
}
