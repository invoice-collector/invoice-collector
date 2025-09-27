
import { SketchCollector } from '../../sketchCollector';

export class TradeukCreditCollector extends SketchCollector {

    static CONFIG = {
        id: "tradeuk_credit",
        name: "TradeUK (Credit)",
        description: "i18n.collectors.tradeuk_credit.description",
        version: "0",
        website: "https://www.credit.trade.co.uk/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/490327.jpg",
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
        entryUrl: "https://www.credit.trade.co.uk/#",
    }

    constructor() {
        super(TradeukCreditCollector.CONFIG);
    }
}
