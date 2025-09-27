
import { SketchCollector } from '../../sketchCollector';

export class PingpingCollector extends SketchCollector {

    static CONFIG = {
        id: "pingping",
        name: "PingPing",
        description: "i18n.collectors.pingping.description",
        version: "0",
        website: "https://pingping.io/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/780790.jpg",
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
        entryUrl: "https://pingping.io/account/subscription",
    }

    constructor() {
        super(PingpingCollector.CONFIG);
    }
}
