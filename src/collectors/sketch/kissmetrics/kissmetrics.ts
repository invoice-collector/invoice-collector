
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KissmetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "kissmetrics",
        name: "KissMetrics",
        description: "i18n.collectors.kissmetrics.description",
        version: "0",
        website: "https://signin.kissmetrics.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9376.jpg",
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
        entryUrl: "https://signin.kissmetrics.com/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KissmetricsCollector.CONFIG);
    }
}
