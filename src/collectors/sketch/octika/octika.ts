
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OctikaCollector extends SketchCollector {

    static CONFIG = {
        id: "octika",
        name: "Octika",
        description: "i18n.collectors.octika.description",
        version: "0",
        website: "https://www.octika.com/module/bms_customer_account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639953.jpg",
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
        entryUrl: "https://www.octika.com/module/bms_customer_account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OctikaCollector.CONFIG);
    }
}
