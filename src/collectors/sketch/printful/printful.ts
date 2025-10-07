
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrintfulCollector extends SketchCollector {

    static CONFIG = {
        id: "printful",
        name: "Printful",
        description: "i18n.collectors.printful.description",
        version: "0",
        website: "https://www.printful.com/dashboard/billing/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148966.jpg",
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
        entryUrl: "https://www.printful.com/dashboard/billing/payment-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrintfulCollector.CONFIG);
    }
}
