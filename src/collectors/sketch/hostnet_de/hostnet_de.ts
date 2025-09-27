
import { SketchCollector } from '../../sketchCollector';

export class HostnetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "hostnet_de",
        name: "hostNET.de",
        description: "i18n.collectors.hostnet_de.description",
        version: "0",
        website: "http://www.hostnet.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7015.jpg",
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
        entryUrl: "http://www.hostnet.de",
    }

    constructor() {
        super(HostnetDeCollector.CONFIG);
    }
}
