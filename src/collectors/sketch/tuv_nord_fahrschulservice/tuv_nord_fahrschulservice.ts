
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TuvNordFahrschulserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "tuv_nord_fahrschulservice",
        name: "TUV Nord Fahrschulservice",
        description: "i18n.collectors.tuv_nord_fahrschulservice.description",
        version: "0",
        website: "https://www4.tuev-nord.de/efa/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006163.jpg",
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
        entryUrl: "https://www4.tuev-nord.de/efa/#/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TuvNordFahrschulserviceCollector.CONFIG);
    }
}
