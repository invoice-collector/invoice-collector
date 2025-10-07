
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VaiTradeCollector extends SketchCollector {

    static CONFIG = {
        id: "vai_trade",
        name: "VAI Trade",
        description: "i18n.collectors.vai_trade.description",
        version: "0",
        website: "https://vaitrade.de/de/app/deals/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42751.jpg",
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
        entryUrl: "https://vaitrade.de/de/app/deals/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VaiTradeCollector.CONFIG);
    }
}
