
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TradingviewCollector extends SketchCollector {

    static CONFIG = {
        id: "tradingview",
        name: "tradingview",
        description: "i18n.collectors.tradingview.description",
        version: "0",
        website: "https://de.tradingview.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211139.jpg",
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
        entryUrl: "https://de.tradingview.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TradingviewCollector.CONFIG);
    }
}
