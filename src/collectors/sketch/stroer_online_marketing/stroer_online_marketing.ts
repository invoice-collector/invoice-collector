
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StroerOnlineMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "stroer_online_marketing",
        name: "Stroer Online Marketing",
        description: "i18n.collectors.stroer_online_marketing.description",
        version: "0",
        website: "https://kundencenter.stroeer-online-marketing.de/accounting/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185146.jpg",
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
        entryUrl: "https://kundencenter.stroeer-online-marketing.de/accounting/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StroerOnlineMarketingCollector.CONFIG);
    }
}
