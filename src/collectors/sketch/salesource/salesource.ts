
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SalesourceCollector extends SketchCollector {

    static CONFIG = {
        id: "salesource",
        name: "Salesource",
        description: "i18n.collectors.salesource.description",
        version: "0",
        website: "https://salesource.io/subscription/billing_details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492108.jpg",
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
        entryUrl: "https://salesource.io/subscription/billing_details",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SalesourceCollector.CONFIG);
    }
}
