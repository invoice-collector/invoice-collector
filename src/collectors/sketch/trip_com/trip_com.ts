
import { SketchCollector } from '../../sketchCollector';

export class TripComCollector extends SketchCollector {

    static CONFIG = {
        id: "trip_com",
        name: "trip.com",
        description: "i18n.collectors.trip_com.description",
        version: "0",
        website: "https://www.trip.com/order/all/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134683.jpg",
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
        entryUrl: "https://www.trip.com/order/all/",
    }

    constructor() {
        super(TripComCollector.CONFIG);
    }
}
