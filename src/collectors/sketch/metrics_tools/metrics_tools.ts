
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MetricsToolsCollector extends SketchCollector {

    static CONFIG = {
        id: "metrics_tools",
        name: "metrics.tools",
        description: "i18n.collectors.metrics_tools.description",
        version: "0",
        website: "https://metrics-tools.de/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56751.jpg",
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
        loginUrl: "https://metrics-tools.de/#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetricsToolsCollector.CONFIG);
    }
}
