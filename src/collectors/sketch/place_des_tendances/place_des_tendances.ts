
import { SketchCollector } from '../../sketchCollector';

export class PlaceDesTendancesCollector extends SketchCollector {

    static CONFIG = {
        id: "place_des_tendances",
        name: "Place des Tendances",
        description: "i18n.collectors.place_des_tendances.description",
        version: "0",
        website: "https://www.placedestendances.com/fr/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122820.jpg",
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
        entryUrl: "https://www.placedestendances.com/fr/fr",
    }

    constructor() {
        super(PlaceDesTendancesCollector.CONFIG);
    }
}
