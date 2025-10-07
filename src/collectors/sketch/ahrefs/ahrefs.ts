
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AhrefsCollector extends SketchCollector {

    static CONFIG = {
        id: "ahrefs",
        name: "Ahrefs",
        description: "i18n.collectors.ahrefs.description",
        version: "0",
        website: "https://app.ahrefs.com/account/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1241.jpg",
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
        entryUrl: "https://app.ahrefs.com/account/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AhrefsCollector.CONFIG);
    }
}
