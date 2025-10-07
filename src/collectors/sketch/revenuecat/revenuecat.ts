
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RevenuecatCollector extends SketchCollector {

    static CONFIG = {
        id: "revenuecat",
        name: "RevenueCat",
        description: "i18n.collectors.revenuecat.description",
        version: "0",
        website: "https://app.revenuecat.com/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226579.jpg",
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
        entryUrl: "https://app.revenuecat.com/settings/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RevenuecatCollector.CONFIG);
    }
}
