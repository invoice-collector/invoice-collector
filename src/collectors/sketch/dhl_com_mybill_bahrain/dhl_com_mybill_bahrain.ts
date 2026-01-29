
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DhlComMybillBahrainCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_com_mybill_bahrain",
        name: "DHL.com - MyBill (BAHRAIN)",
        description: "i18n.collectors.dhl_com_mybill_bahrain.description",
        version: "0",
        website: "https://mydhl.express.dhl/bh/en/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123584.jpg",
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
        loginUrl: "https://mydhl.express.dhl/bh/en/home.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DhlComMybillBahrainCollector.CONFIG);
    }
}
