
import { SketchCollector } from '../../sketchCollector';

export class ShipupCollector extends SketchCollector {

    static CONFIG = {
        id: "shipup",
        name: "Shipup",
        description: "i18n.collectors.shipup.description",
        version: "0",
        website: "https://app.shipup.co/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124046.jpg",
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
        entryUrl: "https://app.shipup.co/settings/subscription",
    }

    constructor() {
        super(ShipupCollector.CONFIG);
    }
}
