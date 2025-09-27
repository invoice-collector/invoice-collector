
import { SketchCollector } from '../../sketchCollector';

export class BestproxyandvpnCollector extends SketchCollector {

    static CONFIG = {
        id: "bestproxyandvpn",
        name: "BestProxyAndVPN",
        description: "i18n.collectors.bestproxyandvpn.description",
        version: "0",
        website: "https://www.bestproxyandvpn.com/control-panel.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53695.jpg",
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
        entryUrl: "https://www.bestproxyandvpn.com/control-panel.html",
    }

    constructor() {
        super(BestproxyandvpnCollector.CONFIG);
    }
}
