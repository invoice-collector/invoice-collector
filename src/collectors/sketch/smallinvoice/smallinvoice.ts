
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmallinvoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "smallinvoice",
        name: "Smallinvoice",
        description: "i18n.collectors.smallinvoice.description",
        version: "0",
        website: "https://app.smallinvoice.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496.jpg",
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
        entryUrl: "https://app.smallinvoice.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmallinvoiceCollector.CONFIG);
    }
}
