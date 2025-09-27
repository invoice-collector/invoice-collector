
import { SketchCollector } from '../../sketchCollector';

export class BikeAndCoCollector extends SketchCollector {

    static CONFIG = {
        id: "bike_and_co",
        name: "Bike&CO",
        description: "i18n.collectors.bike_and_co.description",
        version: "0",
        website: "https://www.bikeandco.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037321.jpg",
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
        entryUrl: "https://www.bikeandco.dk",
    }

    constructor() {
        super(BikeAndCoCollector.CONFIG);
    }
}
