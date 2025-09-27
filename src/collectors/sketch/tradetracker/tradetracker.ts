
import { SketchCollector } from '../../sketchCollector';

export class TradetrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "tradetracker",
        name: "TradeTracker",
        description: "i18n.collectors.tradetracker.description",
        version: "0",
        website: "https://merchant.tradetracker.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/402.jpg",
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
        entryUrl: "https://merchant.tradetracker.com/user/login",
    }

    constructor() {
        super(TradetrackerCollector.CONFIG);
    }
}
