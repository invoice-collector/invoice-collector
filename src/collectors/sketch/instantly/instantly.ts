
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InstantlyCollector extends SketchCollector {

    static CONFIG = {
        id: "instantly",
        name: "Instantly",
        description: "i18n.collectors.instantly.description",
        version: "0",
        website: "https://app.instantly.ai/app/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284748.jpg",
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
        entryUrl: "https://app.instantly.ai/app/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InstantlyCollector.CONFIG);
    }
}
