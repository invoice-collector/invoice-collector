
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AliexpressCollector extends SketchCollector {

    static CONFIG = {
        id: "aliexpress",
        name: "AliExpress",
        description: "i18n.collectors.aliexpress.description",
        version: "0",
        website: "https://trade.aliexpress.com/orderList.htm?tracelog=ws_topbar",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24907.jpg",
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
        loginUrl: "https://trade.aliexpress.com/orderList.htm?tracelog=ws_topbar",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AliexpressCollector.CONFIG);
    }
}
