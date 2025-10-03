
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TraderepublicCollector extends SketchCollector {

    static CONFIG = {
        id: "traderepublic",
        name: "traderepublic",
        description: "i18n.collectors.traderepublic.description",
        version: "0",
        website: "https://traderepublic-data-production.s3.eu-central-1.amazonaws.com/timeline/postbox/2023...",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077769.jpg",
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
        entryUrl: "https://traderepublic-data-production.s3.eu-central-1.amazonaws.com/timeline/postbox/2023...",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TraderepublicCollector.CONFIG);
    }
}
