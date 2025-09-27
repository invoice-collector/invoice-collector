
import { SketchCollector } from '../../sketchCollector';

export class AirBalticCollector extends SketchCollector {

    static CONFIG = {
        id: "air_baltic",
        name: "Air Baltic",
        description: "i18n.collectors.air_baltic.description",
        version: "0",
        website: "https://www.airbaltic.com/en/bookings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67485.jpg",
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
        entryUrl: "https://www.airbaltic.com/en/bookings",
    }

    constructor() {
        super(AirBalticCollector.CONFIG);
    }
}
