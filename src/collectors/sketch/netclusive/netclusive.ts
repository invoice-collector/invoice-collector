
import { SketchCollector } from '../../sketchCollector';

export class NetclusiveCollector extends SketchCollector {

    static CONFIG = {
        id: "netclusive",
        name: "netclusive",
        description: "i18n.collectors.netclusive.description",
        version: "0",
        website: "https://www.netclusive.de/?go=konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33961.jpg",
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
        entryUrl: "https://www.netclusive.de/?go=konto",
    }

    constructor() {
        super(NetclusiveCollector.CONFIG);
    }
}
