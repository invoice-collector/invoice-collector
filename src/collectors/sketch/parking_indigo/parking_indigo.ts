
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ParkingIndigoCollector extends SketchCollector {

    static CONFIG = {
        id: "parking_indigo",
        name: "Parking Indigo",
        description: "i18n.collectors.parking_indigo.description",
        version: "0",
        website: "https://espace-client.fr.parkindigo.com/espace-client/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640875.jpg",
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
        loginUrl: "https://espace-client.fr.parkindigo.com/espace-client/mes-factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParkingIndigoCollector.CONFIG);
    }
}
