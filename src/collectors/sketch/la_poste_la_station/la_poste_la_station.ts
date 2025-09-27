
import { SketchCollector } from '../../sketchCollector';

export class LaPosteLaStationCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_la_station",
        name: "La poste la station",
        description: "i18n.collectors.la_poste_la_station.description",
        version: "0",
        website: "https://lastation.laposte.fr/private-access/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645393.jpg",
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
        entryUrl: "https://lastation.laposte.fr/private-access/factures",
    }

    constructor() {
        super(LaPosteLaStationCollector.CONFIG);
    }
}
