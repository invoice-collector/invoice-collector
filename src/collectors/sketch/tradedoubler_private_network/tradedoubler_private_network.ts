
import { SketchCollector } from '../../sketchCollector';

export class TradedoublerPrivateNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "tradedoubler_private_network",
        name: "Tradedoubler Private Network",
        description: "i18n.collectors.tradedoubler_private_network.description",
        version: "0",
        website: "https://pvn.tradedoubler.com/de/publisher/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515588.jpg",
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
        entryUrl: "https://pvn.tradedoubler.com/de/publisher/payments/",
    }

    constructor() {
        super(TradedoublerPrivateNetworkCollector.CONFIG);
    }
}
