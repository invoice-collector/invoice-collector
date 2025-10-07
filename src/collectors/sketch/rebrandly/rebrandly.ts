
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RebrandlyCollector extends SketchCollector {

    static CONFIG = {
        id: "rebrandly",
        name: "Rebrandly",
        description: "i18n.collectors.rebrandly.description",
        version: "0",
        website: "https://app.rebrandly.com/account/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126835.jpg",
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
        entryUrl: "https://app.rebrandly.com/account/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RebrandlyCollector.CONFIG);
    }
}
