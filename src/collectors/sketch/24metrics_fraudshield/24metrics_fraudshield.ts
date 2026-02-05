
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _24metricsFraudshieldCollector extends SketchCollector {

    static CONFIG = {
        id: "24metrics_fraudshield",
        name: "24metrics Fraudshield",
        description: "i18n.collectors.24metrics_fraudshield.description",
        version: "0",
        website: "https://fraudshield.24metrics.com/app#/billing?tab=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82742.jpg",
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
        loginUrl: "https://fraudshield.24metrics.com/app#/billing?tab=invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_24metricsFraudshieldCollector.CONFIG);
    }
}
