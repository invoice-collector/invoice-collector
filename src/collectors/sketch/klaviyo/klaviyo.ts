
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlaviyoCollector extends SketchCollector {

    static CONFIG = {
        id: "klaviyo",
        name: "Klaviyo",
        description: "i18n.collectors.klaviyo.description",
        version: "0",
        website: "https://www.klaviyo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51030.jpg",
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
        entryUrl: "https://www.klaviyo.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlaviyoCollector.CONFIG);
    }
}
