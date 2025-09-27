
import { SketchCollector } from '../../sketchCollector';

export class ExpressVpnCollector extends SketchCollector {

    static CONFIG = {
        id: "express_vpn",
        name: "Express VPN",
        description: "i18n.collectors.express_vpn.description",
        version: "0",
        website: "https://www.expressvpn.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/152284.jpg",
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
        entryUrl: "https://www.expressvpn.com/",
    }

    constructor() {
        super(ExpressVpnCollector.CONFIG);
    }
}
