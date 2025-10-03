
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RemarkableCollector extends SketchCollector {

    static CONFIG = {
        id: "remarkable",
        name: "reMarkable",
        description: "i18n.collectors.remarkable.description",
        version: "0",
        website: "https://pay.stripe.com/receipts/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1545198.jpg",
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
        entryUrl: "https://pay.stripe.com/receipts/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RemarkableCollector.CONFIG);
    }
}
