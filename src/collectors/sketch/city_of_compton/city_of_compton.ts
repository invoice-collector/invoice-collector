
import { SketchCollector } from '../../sketchCollector';

export class CityOfComptonCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_compton",
        name: "City of Compton",
        description: "i18n.collectors.city_of_compton.description",
        version: "0",
        website: "https://compton.merchanttransact.com/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176430.jpg",
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
        entryUrl: "https://compton.merchanttransact.com/Login",
    }

    constructor() {
        super(CityOfComptonCollector.CONFIG);
    }
}
