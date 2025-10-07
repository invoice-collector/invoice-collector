
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LivewebinarCollector extends SketchCollector {

    static CONFIG = {
        id: "livewebinar",
        name: "LiveWebinar",
        description: "i18n.collectors.livewebinar.description",
        version: "0",
        website: "https://app.livewebinar.com/billing/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778994.jpg",
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
        entryUrl: "https://app.livewebinar.com/billing/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LivewebinarCollector.CONFIG);
    }
}
