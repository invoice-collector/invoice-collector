
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GraphcommonsCollector extends SketchCollector {

    static CONFIG = {
        id: "graphcommons",
        name: "GraphCommons",
        description: "i18n.collectors.graphcommons.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xNlZoOHFIMU9WMlJDaWdxLF9QamdvNmExeEt0SVFNQzdPUjI3WUxseWZKdUJYMWRs0100WpT2BNvK",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732657.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xNlZoOHFIMU9WMlJDaWdxLF9QamdvNmExeEt0SVFNQzdPUjI3WUxseWZKdUJYMWRs0100WpT2BNvK",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GraphcommonsCollector.CONFIG);
    }
}
