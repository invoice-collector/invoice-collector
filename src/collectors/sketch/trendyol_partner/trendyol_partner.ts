
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrendyolPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "trendyol_partner",
        name: "Trendyol Partner",
        description: "i18n.collectors.trendyol_partner.description",
        version: "0",
        website: "https://partner.trendyol.com/de/payments/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973285.jpg",
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
        entryUrl: "https://partner.trendyol.com/de/payments/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrendyolPartnerCollector.CONFIG);
    }
}
