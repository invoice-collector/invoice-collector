
import { SketchCollector } from '../../sketchCollector';

export class MomaxPrivateNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "momax_private_network",
        name: "Momax Private Network",
        description: "i18n.collectors.momax_private_network.description",
        version: "0",
        website: "https://pvn.moemax.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552938.jpg",
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
        entryUrl: "https://pvn.moemax.de/user-billings.do",
    }

    constructor() {
        super(MomaxPrivateNetworkCollector.CONFIG);
    }
}
