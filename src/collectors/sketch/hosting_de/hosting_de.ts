
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "hosting_de",
        name: "Hosting.de",
        description: "i18n.collectors.hosting_de.description",
        version: "0",
        website: "https://secure.hosting.de/billing/invoices/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37551.jpg",
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
        entryUrl: "https://secure.hosting.de/billing/invoices/overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostingDeCollector.CONFIG);
    }
}
