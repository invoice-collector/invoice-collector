
import { SketchCollector } from '../../sketchCollector';

export class RelayComCollector extends SketchCollector {

    static CONFIG = {
        id: "relay_com",
        name: "Relay.com",
        description: "i18n.collectors.relay_com.description",
        version: "0",
        website: "https://www.relay.com/mon-compte.html?ReturnUrl=%2fdefault.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27315.jpg",
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
        entryUrl: "https://www.relay.com/mon-compte.html?ReturnUrl=%2fdefault.aspx",
    }

    constructor() {
        super(RelayComCollector.CONFIG);
    }
}
