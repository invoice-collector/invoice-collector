
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrixtelProCollector extends SketchCollector {

    static CONFIG = {
        id: "prixtel_pro",
        name: "Prixtel Pro",
        description: "i18n.collectors.prixtel_pro.description",
        version: "0",
        website: "https://espaceclient.prixtel.com/factures/liste",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389896.jpg",
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
        entryUrl: "https://espaceclient.prixtel.com/factures/liste",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrixtelProCollector.CONFIG);
    }
}
