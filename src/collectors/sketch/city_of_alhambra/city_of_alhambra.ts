
import { SketchCollector } from '../../sketchCollector';

export class CityOfAlhambraCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_alhambra",
        name: "City of Alhambra",
        description: "i18n.collectors.city_of_alhambra.description",
        version: "0",
        website: "https://billpay.onlinebiller.com/ebpp/alhambraca/Login/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179021.jpg",
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
        entryUrl: "https://billpay.onlinebiller.com/ebpp/alhambraca/Login/Index",
    }

    constructor() {
        super(CityOfAlhambraCollector.CONFIG);
    }
}
