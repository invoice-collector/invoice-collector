
import { SketchCollector } from '../../sketchCollector';

export class OpenvpnIncCollector extends SketchCollector {

    static CONFIG = {
        id: "openvpn_inc",
        name: "OpenVPN Inc",
        description: "i18n.collectors.openvpn_inc.description",
        version: "0",
        website: "https://as-billing.openvpn.net/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39456.jpg",
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
        entryUrl: "https://as-billing.openvpn.net/invoices",
    }

    constructor() {
        super(OpenvpnIncCollector.CONFIG);
    }
}
