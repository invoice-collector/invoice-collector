
import { SketchCollector } from '../../sketchCollector';

export class VcServerNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "vc_server_network",
        name: "VC Server Network",
        description: "i18n.collectors.vc_server_network.description",
        version: "0",
        website: "https://www.vc-kundencenter.de/rechnungen/uebersicht/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/738976.jpg",
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
        entryUrl: "https://www.vc-kundencenter.de/rechnungen/uebersicht/",
    }

    constructor() {
        super(VcServerNetworkCollector.CONFIG);
    }
}
