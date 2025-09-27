
import { SketchCollector } from '../../sketchCollector';

export class CityOfCapeTownCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_cape_town",
        name: "City of Cape Town",
        description: "i18n.collectors.city_of_cape_town.description",
        version: "0",
        website: "https://eservices.capetown.gov.za/irj/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391638.jpg",
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
        entryUrl: "https://eservices.capetown.gov.za/irj/portal/",
    }

    constructor() {
        super(CityOfCapeTownCollector.CONFIG);
    }
}
