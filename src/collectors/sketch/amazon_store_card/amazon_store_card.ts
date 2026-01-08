
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonStoreCardCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_store_card",
        name: "Amazon Store Card",
        description: "i18n.collectors.amazon_store_card.description",
        version: "0",
        website: "https://www.synchronycredit.com/eService/EBill/eBillAction.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162044.jpg",
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
        loginUrl: "https://www.synchronycredit.com/eService/EBill/eBillAction.action",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonStoreCardCollector.CONFIG);
    }
}
