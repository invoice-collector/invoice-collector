
import { SketchCollector } from '../../sketchCollector';

export class SocketlabsCollector extends SketchCollector {

    static CONFIG = {
        id: "socketlabs",
        name: "SocketLabs",
        description: "i18n.collectors.socketlabs.description",
        version: "0",
        website: "https://cp.socketlabs.com/account/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104672.jpg",
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
        entryUrl: "https://cp.socketlabs.com/account/billing/",
    }

    constructor() {
        super(SocketlabsCollector.CONFIG);
    }
}
