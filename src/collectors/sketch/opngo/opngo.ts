
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpngoCollector extends SketchCollector {

    static CONFIG = {
        id: "opngo",
        name: "OPnGO",
        description: "i18n.collectors.opngo.description",
        version: "0",
        website: "https://www.opngo.com/fr/account/orders/current",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/821884.jpg",
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
        entryUrl: "https://www.opngo.com/fr/account/orders/current",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpngoCollector.CONFIG);
    }
}
