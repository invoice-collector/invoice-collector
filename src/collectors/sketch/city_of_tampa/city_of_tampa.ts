
import { SketchCollector } from '../../sketchCollector';

export class CityOfTampaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_tampa",
        name: "City of Tampa",
        description: "i18n.collectors.city_of_tampa.description",
        version: "0",
        website: "https://www.tampa.gov",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037295.jpg",
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
        entryUrl: "https://www.tampa.gov",
    }

    constructor() {
        super(CityOfTampaCollector.CONFIG);
    }
}
