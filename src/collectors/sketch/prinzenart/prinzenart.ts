
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrinzenartCollector extends SketchCollector {

    static CONFIG = {
        id: "prinzenart",
        name: "Prinzenart",
        description: "i18n.collectors.prinzenart.description",
        version: "0",
        website: "https://kathrin-prinz-8wdn.squarespace.com/config/settings/billing/view-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445818.jpg",
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
        entryUrl: "https://kathrin-prinz-8wdn.squarespace.com/config/settings/billing/view-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrinzenartCollector.CONFIG);
    }
}
