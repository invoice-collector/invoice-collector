
import { SketchCollector } from '../../sketchCollector';

export class NetevenCollector extends SketchCollector {

    static CONFIG = {
        id: "neteven",
        name: "Neteven",
        description: "i18n.collectors.neteven.description",
        version: "0",
        website: "https://evenmarketplaces.neteven.com/neteven",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59711.jpg",
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
        entryUrl: "https://evenmarketplaces.neteven.com/neteven",
    }

    constructor() {
        super(NetevenCollector.CONFIG);
    }
}
