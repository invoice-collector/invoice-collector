
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PerformanceHorizonGroupLtdGbCollector extends SketchCollector {

    static CONFIG = {
        id: "performance_horizon_group_ltd_gb",
        name: "Performance Horizon Group Ltd. GB",
        description: "i18n.collectors.performance_horizon_group_ltd_gb.description",
        version: "0",
        website: "https://appleservices-console.partnerize.com/login/appleservices/de?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920095.jpg",
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
        loginUrl: "https://appleservices-console.partnerize.com/login/appleservices/de?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PerformanceHorizonGroupLtdGbCollector.CONFIG);
    }
}
