
import { SketchCollector } from '../../sketchCollector';

export class WasteConnectionsCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_connections",
        name: "Waste Connections",
        description: "i18n.collectors.waste_connections.description",
        version: "0",
        website: "https://www.wcicustomer.com/User/KubraContainer.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83346.jpg",
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
        entryUrl: "https://www.wcicustomer.com/User/KubraContainer.aspx",
    }

    constructor() {
        super(WasteConnectionsCollector.CONFIG);
    }
}
