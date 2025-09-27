
import { SketchCollector } from '../../sketchCollector';

export class BottleTaxiCollector extends SketchCollector {

    static CONFIG = {
        id: "bottle_taxi",
        name: "Bottle Taxi",
        description: "i18n.collectors.bottle_taxi.description",
        version: "0",
        website: "https://bottle.taxi/me/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203542.jpg",
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
        entryUrl: "https://bottle.taxi/me/orders",
    }

    constructor() {
        super(BottleTaxiCollector.CONFIG);
    }
}
