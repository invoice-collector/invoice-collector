
import { SketchCollector } from '../../sketchCollector';

export class HotelsAndCarsByPointsCollector extends SketchCollector {

    static CONFIG = {
        id: "hotels_and_cars_by_points",
        name: "Hotels & Cars by Points",
        description: "i18n.collectors.hotels_and_cars_by_points.description",
        version: "0",
        website: "https://milesandmore.points.com/me/trips",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221828.jpg",
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
        entryUrl: "https://milesandmore.points.com/me/trips",
    }

    constructor() {
        super(HotelsAndCarsByPointsCollector.CONFIG);
    }
}
