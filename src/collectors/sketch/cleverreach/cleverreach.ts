
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CleverreachCollector extends SketchCollector {

    static CONFIG = {
        id: "cleverreach",
        name: "CleverReach",
        description: "i18n.collectors.cleverreach.description",
        version: "0",
        website: "https://eu1.cleverreach.com/admin/login.php?ref=%2Fadmin%2Faccount_invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/519.jpg",
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
        entryUrl: "https://eu1.cleverreach.com/admin/login.php?ref=%2Fadmin%2Faccount_invoices.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CleverreachCollector.CONFIG);
    }
}
