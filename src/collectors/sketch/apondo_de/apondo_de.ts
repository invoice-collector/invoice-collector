
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApondoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "apondo_de",
        name: "apondo.de",
        description: "i18n.collectors.apondo_de.description",
        version: "0",
        website: "https://www.apondo.de/myOrders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694553.jpg",
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
        entryUrl: "https://www.apondo.de/myOrders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApondoDeCollector.CONFIG);
    }
}
