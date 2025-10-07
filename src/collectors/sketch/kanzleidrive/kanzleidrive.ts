
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KanzleidriveCollector extends SketchCollector {

    static CONFIG = {
        id: "kanzleidrive",
        name: "Kanzleidrive",
        description: "i18n.collectors.kanzleidrive.description",
        version: "0",
        website: "https://app.kanzleidrive.de/backoffice/office/accounting/subscriptions/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519930.jpg",
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
        entryUrl: "https://app.kanzleidrive.de/backoffice/office/accounting/subscriptions/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KanzleidriveCollector.CONFIG);
    }
}
