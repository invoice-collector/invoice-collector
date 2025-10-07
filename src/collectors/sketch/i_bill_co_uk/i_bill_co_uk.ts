
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IBillCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "i_bill_co_uk",
        name: "i-bill.co.uk",
        description: "i18n.collectors.i_bill_co_uk.description",
        version: "0",
        website: "https://www.i-bill.co.uk/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80704.jpg",
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
        entryUrl: "https://www.i-bill.co.uk/Invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IBillCoUkCollector.CONFIG);
    }
}
