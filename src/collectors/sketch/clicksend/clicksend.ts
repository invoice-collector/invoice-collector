
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ClicksendCollector extends SketchCollector {

    static CONFIG = {
        id: "clicksend",
        name: "ClickSend",
        description: "i18n.collectors.clicksend.description",
        version: "0",
        website: "https://dashboard.clicksend.com/#/account/billing-recharge/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91850.jpg",
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
        entryUrl: "https://dashboard.clicksend.com/#/account/billing-recharge/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClicksendCollector.CONFIG);
    }
}
