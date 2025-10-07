
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FeedlyCollector extends SketchCollector {

    static CONFIG = {
        id: "feedly",
        name: "feedly",
        description: "i18n.collectors.feedly.description",
        version: "0",
        website: "https://feedly.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7665.jpg",
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
        entryUrl: "https://feedly.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FeedlyCollector.CONFIG);
    }
}
