
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrintCollector extends SketchCollector {

    static CONFIG = {
        id: "trint",
        name: "trint",
        description: "i18n.collectors.trint.description",
        version: "0",
        website: "https://app.trint.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25780.jpg",
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
        entryUrl: "https://app.trint.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrintCollector.CONFIG);
    }
}
