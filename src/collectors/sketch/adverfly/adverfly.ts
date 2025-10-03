
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdverflyCollector extends SketchCollector {

    static CONFIG = {
        id: "adverfly",
        name: "Adverfly",
        description: "i18n.collectors.adverfly.description",
        version: "0",
        website: "https://app.adverfly.io/auth/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2520660.jpg",
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
        entryUrl: "https://app.adverfly.io/auth/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdverflyCollector.CONFIG);
    }
}
