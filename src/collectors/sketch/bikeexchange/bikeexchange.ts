
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BikeexchangeCollector extends SketchCollector {

    static CONFIG = {
        id: "bikeexchange",
        name: "BikeExchange",
        description: "i18n.collectors.bikeexchange.description",
        version: "0",
        website: "https://www.bikeexchange.de/client/billings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779729.jpg",
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
        entryUrl: "https://www.bikeexchange.de/client/billings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BikeexchangeCollector.CONFIG);
    }
}
