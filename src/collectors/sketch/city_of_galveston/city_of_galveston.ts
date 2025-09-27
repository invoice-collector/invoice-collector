
import { SketchCollector } from '../../sketchCollector';

export class CityOfGalvestonCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_galveston",
        name: "City of Galveston",
        description: "i18n.collectors.city_of_galveston.description",
        version: "0",
        website: "https://galvestontx.epayub.com/AccountHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230931.jpg",
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
        entryUrl: "https://galvestontx.epayub.com/AccountHistory",
    }

    constructor() {
        super(CityOfGalvestonCollector.CONFIG);
    }
}
