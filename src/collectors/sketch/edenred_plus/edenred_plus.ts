
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdenredPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred_plus",
        name: "Edenred Plus",
        description: "i18n.collectors.edenred_plus.description",
        version: "0",
        website: "https://client.edenredplus.com/fr/fr/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4572210.jpg",
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
        entryUrl: "https://client.edenredplus.com/fr/fr/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdenredPlusCollector.CONFIG);
    }
}
