
import { SketchCollector } from '../../sketchCollector';

export class DogadoPartnerNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "dogado_partner_network",
        name: "Dogado Partner Network",
        description: "i18n.collectors.dogado_partner_network.description",
        version: "0",
        website: "https://partner.dogado.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/901706.jpg",
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
        entryUrl: "https://partner.dogado.de/user-billings.do",
    }

    constructor() {
        super(DogadoPartnerNetworkCollector.CONFIG);
    }
}
