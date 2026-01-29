
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "flink",
        name: "Flink",
        description: "i18n.collectors.flink.description",
        version: "0",
        website: "https://www.goflink.com/de-DE/account/order-details/ea933e44-7ecc-4fbc-9790-ecd9e700d016/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881830.jpg",
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
        loginUrl: "https://www.goflink.com/de-DE/account/order-details/ea933e44-7ecc-4fbc-9790-ecd9e700d016/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FlinkCollector.CONFIG);
    }
}
