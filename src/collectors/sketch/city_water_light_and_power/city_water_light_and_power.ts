
import { SketchCollector } from '../../sketchCollector';

export class CityWaterLightAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "city_water_light_and_power",
        name: "City Water, Light & Power",
        description: "i18n.collectors.city_water_light_and_power.description",
        version: "0",
        website: "https://www.cwlp.com/myCWLP/myCWLPLogin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8968.jpg",
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
        entryUrl: "https://www.cwlp.com/myCWLP/myCWLPLogin.aspx",
    }

    constructor() {
        super(CityWaterLightAndPowerCollector.CONFIG);
    }
}
