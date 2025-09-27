
import { SketchCollector } from '../../sketchCollector';

export class DachauCitycomCollector extends SketchCollector {

    static CONFIG = {
        id: "dachau_citycom",
        name: "Dachau CityCom",
        description: "i18n.collectors.dachau_citycom.description",
        version: "0",
        website: "https://www.dachau-citycom.de/rechnung-online/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9069.jpg",
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
        entryUrl: "https://www.dachau-citycom.de/rechnung-online/index.php",
    }

    constructor() {
        super(DachauCitycomCollector.CONFIG);
    }
}
