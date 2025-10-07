
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoldbeckParkingServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "goldbeck_parking_services",
        name: "Goldbeck Parking Services",
        description: "i18n.collectors.goldbeck_parking_services.description",
        version: "0",
        website: "https://www.goldbeck-parking.de/mein-parking-profil/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513821.jpg",
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
        entryUrl: "https://www.goldbeck-parking.de/mein-parking-profil/de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoldbeckParkingServicesCollector.CONFIG);
    }
}
