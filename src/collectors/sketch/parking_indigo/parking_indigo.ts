
import { SketchCollector } from '../../sketchCollector';

export class ParkingIndigoCollector extends SketchCollector {

    static CONFIG = {
        id: "parking_indigo",
        name: "Parking Indigo",
        description: "i18n.collectors.parking_indigo.description",
        version: "0",
        website: "https://espace-client.fr.parkindigo.com/espace-client/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640875.jpg",
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
        entryUrl: "https://espace-client.fr.parkindigo.com/espace-client/mes-factures",
    }

    constructor() {
        super(ParkingIndigoCollector.CONFIG);
    }
}
