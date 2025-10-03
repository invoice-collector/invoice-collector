
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TuciaCollector extends SketchCollector {

    static CONFIG = {
        id: "tucia",
        name: "Tucia",
        description: "i18n.collectors.tucia.description",
        version: "0",
        website: "https://www.tucia.com/account/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/152283.jpg",
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
        entryUrl: "https://www.tucia.com/account/billing/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TuciaCollector.CONFIG);
    }
}
