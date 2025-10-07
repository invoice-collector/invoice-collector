
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PirateShipingCollector extends SketchCollector {

    static CONFIG = {
        id: "pirate_shiping",
        name: "Pirate Shiping",
        description: "i18n.collectors.pirate_shiping.description",
        version: "0",
        website: "https://ship.pirateship.com/reports/paymentreceipt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3313199.jpg",
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
        entryUrl: "https://ship.pirateship.com/reports/paymentreceipt",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PirateShipingCollector.CONFIG);
    }
}
