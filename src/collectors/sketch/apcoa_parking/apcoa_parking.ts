
import { SketchCollector } from '../../sketchCollector';

export class ApcoaParkingCollector extends SketchCollector {

    static CONFIG = {
        id: "apcoa_parking",
        name: "APCOA Parking",
        description: "i18n.collectors.apcoa_parking.description",
        version: "0",
        website: "https://www.mein-apcoa.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66761.jpg",
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
        entryUrl: "https://www.mein-apcoa.de/",
    }

    constructor() {
        super(ApcoaParkingCollector.CONFIG);
    }
}
