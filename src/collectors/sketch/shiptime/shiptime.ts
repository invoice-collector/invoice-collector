
import { SketchCollector } from '../../sketchCollector';

export class ShiptimeCollector extends SketchCollector {

    static CONFIG = {
        id: "shiptime",
        name: "ShipTime",
        description: "i18n.collectors.shiptime.description",
        version: "0",
        website: "https://my.shiptime.com/shiptime.html?locale=en#nav.Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64961.jpg",
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
        entryUrl: "https://my.shiptime.com/shiptime.html?locale=en#nav.Invoices",
    }

    constructor() {
        super(ShiptimeCollector.CONFIG);
    }
}
