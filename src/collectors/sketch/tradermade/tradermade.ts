
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TradermadeCollector extends SketchCollector {

    static CONFIG = {
        id: "tradermade",
        name: "Tradermade",
        description: "i18n.collectors.tradermade.description",
        version: "0",
        website: "https://www.tradermade.com/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2010887.jpg",
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
        entryUrl: "https://www.tradermade.com/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TradermadeCollector.CONFIG);
    }
}
