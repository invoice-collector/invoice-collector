
import { SketchCollector } from '../../sketchCollector';

export class ShipedgeCollector extends SketchCollector {

    static CONFIG = {
        id: "shipedge",
        name: "SHIPEDGE",
        description: "i18n.collectors.shipedge.description",
        version: "0",
        website: "https://flftx.shipedge.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920876.jpg",
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
        entryUrl: "https://flftx.shipedge.com/",
    }

    constructor() {
        super(ShipedgeCollector.CONFIG);
    }
}
