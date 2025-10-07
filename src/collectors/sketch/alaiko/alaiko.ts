
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlaikoCollector extends SketchCollector {

    static CONFIG = {
        id: "alaiko",
        name: "Alaiko",
        description: "i18n.collectors.alaiko.description",
        version: "0",
        website: "https://app.alaiko.com/customer/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732360.jpg",
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
        entryUrl: "https://app.alaiko.com/customer/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlaikoCollector.CONFIG);
    }
}
