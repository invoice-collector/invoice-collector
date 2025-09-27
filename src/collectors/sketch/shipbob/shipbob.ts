
import { SketchCollector } from '../../sketchCollector';

export class ShipbobCollector extends SketchCollector {

    static CONFIG = {
        id: "shipbob",
        name: "Shipbob",
        description: "i18n.collectors.shipbob.description",
        version: "0",
        website: "https://web.shipbob.com/App/IndexV2/#/Billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1340303.jpg",
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
        entryUrl: "https://web.shipbob.com/App/IndexV2/#/Billing",
    }

    constructor() {
        super(ShipbobCollector.CONFIG);
    }
}
