
import { SketchCollector } from '../../sketchCollector';

export class ShippitCollector extends SketchCollector {

    static CONFIG = {
        id: "shippit",
        name: "shippit",
        description: "i18n.collectors.shippit.description",
        version: "0",
        website: "https://app.shippit.com/merchant/eco-outdoor-3a2c91cb-c402-4d76-833b-1f7d6b6a2aef/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874683.jpg",
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
        entryUrl: "https://app.shippit.com/merchant/eco-outdoor-3a2c91cb-c402-4d76-833b-1f7d6b6a2aef/invoices",
    }

    constructor() {
        super(ShippitCollector.CONFIG);
    }
}
