
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InvoicefetcherCollector extends SketchCollector {

    static CONFIG = {
        id: "invoicefetcher",
        name: "Invoicefetcher",
        description: "i18n.collectors.invoicefetcher.description",
        version: "0",
        website: "https://www.invoicefetcher.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1274267.jpg",
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
        entryUrl: "https://www.invoicefetcher.com/de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InvoicefetcherCollector.CONFIG);
    }
}
