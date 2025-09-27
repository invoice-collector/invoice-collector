
import { SketchCollector } from '../../sketchCollector';

export class ShipcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "shipcloud",
        name: "shipcloud",
        description: "i18n.collectors.shipcloud.description",
        version: "0",
        website: "https://app.shipcloud.io/de/account/billing_information",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8135.jpg",
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
        entryUrl: "https://app.shipcloud.io/de/account/billing_information",
    }

    constructor() {
        super(ShipcloudCollector.CONFIG);
    }
}
