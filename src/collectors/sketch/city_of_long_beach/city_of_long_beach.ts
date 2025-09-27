
import { SketchCollector } from '../../sketchCollector';

export class CityOfLongBeachCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_long_beach",
        name: "City of Long Beach",
        description: "i18n.collectors.city_of_long_beach.description",
        version: "0",
        website: "https://clbutilitywebservices.longbeach.gov/meridian.html#/log",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176465.jpg",
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
        entryUrl: "https://clbutilitywebservices.longbeach.gov/meridian.html#/log",
    }

    constructor() {
        super(CityOfLongBeachCollector.CONFIG);
    }
}
