
import { SketchCollector } from '../../sketchCollector';

export class BuzzNetworkVirtualLandlineCollector extends SketchCollector {

    static CONFIG = {
        id: "buzz_network_virtual_landline",
        name: "Buzz Network - Virtual Landline",
        description: "i18n.collectors.buzz_network_virtual_landline.description",
        version: "0",
        website: "https://www.virtuallandline.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206484.jpg",
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
        entryUrl: "https://www.virtuallandline.co.uk/login",
    }

    constructor() {
        super(BuzzNetworkVirtualLandlineCollector.CONFIG);
    }
}
