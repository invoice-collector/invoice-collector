
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChargeMyHyundaiCollector extends SketchCollector {

    static CONFIG = {
        id: "charge_my_hyundai",
        name: "Charge My Hyundai",
        description: "i18n.collectors.charge_my_hyundai.description",
        version: "0",
        website: "https://chargemyhyundai.com/web/hyundai-de/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1219830.jpg",
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
        loginUrl: "https://chargemyhyundai.com/web/hyundai-de/dashboard/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChargeMyHyundaiCollector.CONFIG);
    }
}
