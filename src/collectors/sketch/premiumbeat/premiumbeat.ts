
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PremiumbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "premiumbeat",
        name: "PremiumBeat",
        description: "i18n.collectors.premiumbeat.description",
        version: "0",
        website: "https://www.premiumbeat.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14260.jpg",
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
        entryUrl: "https://www.premiumbeat.com/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PremiumbeatCollector.CONFIG);
    }
}
