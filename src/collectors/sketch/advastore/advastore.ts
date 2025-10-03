
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdvastoreCollector extends SketchCollector {

    static CONFIG = {
        id: "advastore",
        name: "Advastore",
        description: "i18n.collectors.advastore.description",
        version: "0",
        website: "https://merchant.advastore.com/my-storage/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2785613.jpg",
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
        entryUrl: "https://merchant.advastore.com/my-storage/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdvastoreCollector.CONFIG);
    }
}
