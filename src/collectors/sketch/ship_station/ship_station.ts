
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShipStationCollector extends SketchCollector {

    static CONFIG = {
        id: "ship_station",
        name: "Ship Station",
        description: "i18n.collectors.ship_station.description",
        version: "0",
        website: "https://ss.shipstation.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405655.jpg",
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
        entryUrl: "https://ss.shipstation.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShipStationCollector.CONFIG);
    }
}
