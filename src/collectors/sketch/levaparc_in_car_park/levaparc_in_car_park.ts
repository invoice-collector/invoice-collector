
import { SketchCollector } from '../../sketchCollector';

export class LevaparcInCarParkCollector extends SketchCollector {

    static CONFIG = {
        id: "levaparc_in_car_park",
        name: "LEVAPARC - in Car Park",
        description: "i18n.collectors.levaparc_in_car_park.description",
        version: "0",
        website: "https://reza-levaparc.axigap.com/Account/Factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503864.jpg",
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
        entryUrl: "https://reza-levaparc.axigap.com/Account/Factures",
    }

    constructor() {
        super(LevaparcInCarParkCollector.CONFIG);
    }
}
