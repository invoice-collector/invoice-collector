
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RjmetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "rjmetrics",
        name: "RJMetrics",
        description: "i18n.collectors.rjmetrics.description",
        version: "0",
        website: "https://dashboard.rjmetrics.com/v2/session/create",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8771.jpg",
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
        loginUrl: "https://dashboard.rjmetrics.com/v2/session/create",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RjmetricsCollector.CONFIG);
    }
}
