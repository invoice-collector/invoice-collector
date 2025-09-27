
import { SketchCollector } from '../../sketchCollector';

export class JlcpcbCollector extends SketchCollector {

    static CONFIG = {
        id: "jlcpcb",
        name: "JLCPCB",
        description: "i18n.collectors.jlcpcb.description",
        version: "0",
        website: "https://jlcpcb.com/client/index.html#/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124044.jpg",
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
        entryUrl: "https://jlcpcb.com/client/index.html#/order",
    }

    constructor() {
        super(JlcpcbCollector.CONFIG);
    }
}
