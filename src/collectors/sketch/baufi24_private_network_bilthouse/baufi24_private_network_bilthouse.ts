
import { SketchCollector } from '../../sketchCollector';

export class Baufi24PrivateNetworkBilthouseCollector extends SketchCollector {

    static CONFIG = {
        id: "baufi24_private_network_bilthouse",
        name: "Baufi24 Private Network / Bilthouse",
        description: "i18n.collectors.baufi24_private_network_bilthouse.description",
        version: "0",
        website: "https://partnerprogramm.bilthouse.com/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180704.jpg",
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
        entryUrl: "https://partnerprogramm.bilthouse.com/auszahlungen.cgi",
    }

    constructor() {
        super(Baufi24PrivateNetworkBilthouseCollector.CONFIG);
    }
}
