
import { SketchCollector } from '../../sketchCollector';

export class VioNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "vio_networks",
        name: "vio:networks",
        description: "i18n.collectors.vio_networks.description",
        version: "0",
        website: "https://login.vionetworks.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33943.jpg",
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
        entryUrl: "https://login.vionetworks.de/",
    }

    constructor() {
        super(VioNetworksCollector.CONFIG);
    }
}
