
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CalltrackingmetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "calltrackingmetrics",
        name: "CallTrackingMetrics",
        description: "i18n.collectors.calltrackingmetrics.description",
        version: "0",
        website: "https://app.calltrackingmetrics.com/payment_methods?agency=1#billing-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097935.jpg",
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
        entryUrl: "https://app.calltrackingmetrics.com/payment_methods?agency=1#billing-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CalltrackingmetricsCollector.CONFIG);
    }
}
