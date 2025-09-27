
import { SketchCollector } from '../../sketchCollector';

export class WaterPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "water_plus",
        name: "Water Plus",
        description: "i18n.collectors.water_plus.description",
        version: "0",
        website: "https://www.water-plus.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30197.jpg",
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
        entryUrl: "https://www.water-plus.co.uk/login",
    }

    constructor() {
        super(WaterPlusCollector.CONFIG);
    }
}
