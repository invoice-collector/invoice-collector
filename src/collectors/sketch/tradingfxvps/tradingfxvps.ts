
import { SketchCollector } from '../../sketchCollector';

export class TradingfxvpsCollector extends SketchCollector {

    static CONFIG = {
        id: "tradingfxvps",
        name: "TRADINGFXVPS",
        description: "i18n.collectors.tradingfxvps.description",
        version: "0",
        website: "https://tradingfxvps.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/810085.jpg",
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
        entryUrl: "https://tradingfxvps.com/",
    }

    constructor() {
        super(TradingfxvpsCollector.CONFIG);
    }
}
