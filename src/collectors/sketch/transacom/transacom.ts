
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransacomCollector extends SketchCollector {

    static CONFIG = {
        id: "transacom",
        name: "Transacom",
        description: "i18n.collectors.transacom.description",
        version: "0",
        website: "https://compta-transacom.bluerocktel.net/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778992.jpg",
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
        entryUrl: "https://compta-transacom.bluerocktel.net/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransacomCollector.CONFIG);
    }
}
