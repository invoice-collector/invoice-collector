
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KaffekapslenCollector extends SketchCollector {

    static CONFIG = {
        id: "kaffekapslen",
        name: "Kaffekapslen",
        description: "i18n.collectors.kaffekapslen.description",
        version: "0",
        website: "https://www.kaffekapslen.de/sales/order/printInvoice/order_id/6655647/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445916.jpg",
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
        entryUrl: "https://www.kaffekapslen.de/sales/order/printInvoice/order_id/6655647/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KaffekapslenCollector.CONFIG);
    }
}
