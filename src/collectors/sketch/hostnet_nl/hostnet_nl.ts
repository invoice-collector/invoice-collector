
import { SketchCollector } from '../../sketchCollector';

export class HostnetNlCollector extends SketchCollector {

    static CONFIG = {
        id: "hostnet_nl",
        name: "Hostnet.nl",
        description: "i18n.collectors.hostnet_nl.description",
        version: "0",
        website: "https://mijn.hostnet.nl/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9560.jpg",
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
        entryUrl: "https://mijn.hostnet.nl/account/",
    }

    constructor() {
        super(HostnetNlCollector.CONFIG);
    }
}
