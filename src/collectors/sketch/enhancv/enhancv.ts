
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnhancvCollector extends SketchCollector {

    static CONFIG = {
        id: "enhancv",
        name: "Enhancv",
        description: "i18n.collectors.enhancv.description",
        version: "0",
        website: "https://app.enhancv.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428649.jpg",
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
        entryUrl: "https://app.enhancv.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnhancvCollector.CONFIG);
    }
}
