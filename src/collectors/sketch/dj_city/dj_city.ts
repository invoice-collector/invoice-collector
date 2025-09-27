
import { SketchCollector } from '../../sketchCollector';

export class DjCityCollector extends SketchCollector {

    static CONFIG = {
        id: "dj_city",
        name: "DJ CITY",
        description: "i18n.collectors.dj_city.description",
        version: "0",
        website: "https://www.djcity.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131391.jpg",
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
        entryUrl: "https://www.djcity.com/account/billing",
    }

    constructor() {
        super(DjCityCollector.CONFIG);
    }
}
