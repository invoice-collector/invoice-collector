
import { SketchCollector } from '../../sketchCollector';

export class CityMapCollector extends SketchCollector {

    static CONFIG = {
        id: "city_map",
        name: "City Map",
        description: "i18n.collectors.city_map.description",
        version: "0",
        website: "https://my.cmpowersite.com/intern/account/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881826.jpg",
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
        entryUrl: "https://my.cmpowersite.com/intern/account/payments",
    }

    constructor() {
        super(CityMapCollector.CONFIG);
    }
}
